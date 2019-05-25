import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { Context } from "../../utils";
import { UniqueConstraintViolationError } from "../../errorhandling/customerrors";
import { AuthPayload } from "../../generated/prisma-client";

interface AuthMutation {
  signup({email, password, firstName, lastName}: any, ctx: Context): Promise<AuthPayload>,
  login({email, password}: any, ctx: Context): Promise<AuthPayload>
}

export const AuthMutations: AuthMutation = {
  /**
   * Register mutation that takes user credentials
   * and creates a new User
   *
   * @param email => type: String
   * @param password => type: String
   * @param Username => type: String
   * @param ctx - request context allows access to http headers
   */
  async signup({ email, password, firstName, lastName }, ctx: Context) {
    try {
      // make sure User doesn't exist before attempting
      // to create a new User
      const userExists = await ctx.prisma.$exists.user({ email: email });
      if (userExists) {
        throw new UniqueConstraintViolationError(email);
      }

      // hash the password and create the User
      password = await bcrypt.hash(password, 10);
      const user = await ctx.prisma.createUser({
        email: email,
        password: password,
        role: "USER",
        profile: {
          create: {
            firstName: firstName,
            lastName: lastName
          }
        }
      });

      return {
        token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
        user
      };
    } catch (err) {
      throw err;
    }
  },

  /**
   * Login mutation that takes the users email and password
   * and authenticates the credentials with the ones stored
   * in the database
   *
   * @param email => String
   * @param password => String
   * @param ctx - request context allows access to http headers
   */
  async login({ email, password }, ctx: Context) {
    try {
      // make sure the user exists first
      const user = await ctx.prisma.user({ email: email });
      if (!user) {
        throw new Error(`No such User found for email: ${email}`);
      }

      // then validate their credentials
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error("Invalid password");
      }

      // everything checks out, send them back some data
      return {
        token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
        user
      };
    } catch (err) {
      throw err;
    }
  },
};
