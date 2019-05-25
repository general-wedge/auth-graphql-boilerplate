import { Context, getUserId } from "../../utils";
import { UserNotFoundError, UserNotAuthorizedError } from '../../errorhandling/customerrors'
import { User } from '../../generated/prisma-client'

interface UserMutation {
  deleteUser({ id }: any, ctx: Context): Promise<User>
}

export const UserMutations: UserMutation = {
  /**
   * Delete mutation that removes a User from the database.
   * This action can only be performed by an admin.
   *
   * @param id - the ID of the User to be deleted
   * @param ctx - request context allows access to http headers
   */
  async deleteUser({ id }, ctx: Context) {
    try {
      const userId = getUserId(ctx); // authenticate
      const user = await ctx.prisma.user({ id: userId });

      // verify this user can perform this action
      if (user.role != "ADMIN") {
        // TODO: log this attempt
        throw new UserNotAuthorizedError(userId)
      }

      const userExists = await ctx.prisma.$exists.user({ id });
      if (!userExists) {
        throw new UserNotFoundError(id)
      }

      return await ctx.prisma.deleteUser({ id });
    } catch (err) {
      // TODO: log error
      throw err;
    }
  }
}