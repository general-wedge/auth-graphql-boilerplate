// Queries
import { UserQueries } from "./Query/user";
//Mutations
import { AuthMutations } from "./Mutation/auth";
import { UserMutations } from './Mutation/user'

export default {
  Mutation: {
    ...AuthMutations,
    ...UserMutations
  },
  Query: {
    ...UserQueries
  }
};
