import { UserNotFoundError } from '../../errorhandling/customerrors'
import { getUserId, Context } from '../../utils';
import { User } from '../../generated/prisma-client'

interface UserQuery {
  user({ id }: any, ctx: Context): Promise<User>
  users(ctx: Context): Promise<User[]>
  me(ctx: Context): Promise<User>
}

export const UserQueries: UserQuery = {
  /**
   * Retrieves a user by their ID
   * @param id - the ID of the user
   */
  user: async ({ id }, ctx: Context) => {
    const userId: string = getUserId(ctx);

    if (id == null) {
      // TODO: do something before error is thrown
      // TODO: Wrap this in method somewhere - too much duplication
      throw new UserNotFoundError(id)
    }

    return await ctx.prisma.user({ id }).profile();
  },
  /**
   * Returns all users within the database
   * 
   * @param ctx - request context allows access to http headers
   */
  users: async (ctx: Context) => {
    const userId: string = getUserId(ctx);
    return await ctx.prisma.users();
  },

  /**
   * Get the currently authenticated users own data
   * 
   * @param ctx - request context allows access to http headers
   */
  me(ctx: Context) {
    const userId: string = getUserId(ctx);
    return ctx.prisma.user({ id: userId }).profile();
  }
};
