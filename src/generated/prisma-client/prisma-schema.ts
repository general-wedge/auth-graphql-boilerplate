// Code generated by Prisma (prisma@1.33.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateAuthPayload {
  count: Int!
}

type AggregateProfile {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AuthPayload {
  token: String!
  user: User!
}

type AuthPayloadConnection {
  pageInfo: PageInfo!
  edges: [AuthPayloadEdge]!
  aggregate: AggregateAuthPayload!
}

input AuthPayloadCreateInput {
  token: String!
  user: UserCreateOneInput!
}

type AuthPayloadEdge {
  node: AuthPayload!
  cursor: String!
}

enum AuthPayloadOrderByInput {
  token_ASC
  token_DESC
}

type AuthPayloadPreviousValues {
  token: String!
}

type AuthPayloadSubscriptionPayload {
  mutation: MutationType!
  node: AuthPayload
  updatedFields: [String!]
  previousValues: AuthPayloadPreviousValues
}

input AuthPayloadSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AuthPayloadWhereInput
  AND: [AuthPayloadSubscriptionWhereInput!]
  OR: [AuthPayloadSubscriptionWhereInput!]
  NOT: [AuthPayloadSubscriptionWhereInput!]
}

input AuthPayloadUpdateManyMutationInput {
  token: String
}

input AuthPayloadWhereInput {
  token: String
  token_not: String
  token_in: [String!]
  token_not_in: [String!]
  token_lt: String
  token_lte: String
  token_gt: String
  token_gte: String
  token_contains: String
  token_not_contains: String
  token_starts_with: String
  token_not_starts_with: String
  token_ends_with: String
  token_not_ends_with: String
  user: UserWhereInput
  AND: [AuthPayloadWhereInput!]
  OR: [AuthPayloadWhereInput!]
  NOT: [AuthPayloadWhereInput!]
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createAuthPayload(data: AuthPayloadCreateInput!): AuthPayload!
  updateManyAuthPayloads(data: AuthPayloadUpdateManyMutationInput!, where: AuthPayloadWhereInput): BatchPayload!
  deleteManyAuthPayloads(where: AuthPayloadWhereInput): BatchPayload!
  createProfile(data: ProfileCreateInput!): Profile!
  updateProfile(data: ProfileUpdateInput!, where: ProfileWhereUniqueInput!): Profile
  updateManyProfiles(data: ProfileUpdateManyMutationInput!, where: ProfileWhereInput): BatchPayload!
  upsertProfile(where: ProfileWhereUniqueInput!, create: ProfileCreateInput!, update: ProfileUpdateInput!): Profile!
  deleteProfile(where: ProfileWhereUniqueInput!): Profile
  deleteManyProfiles(where: ProfileWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Profile {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  firstName: String!
  lastName: String!
  dateOfBirth: DateTime
  address: String
  countryOfOrigin: String
  user: User!
}

type ProfileConnection {
  pageInfo: PageInfo!
  edges: [ProfileEdge]!
  aggregate: AggregateProfile!
}

input ProfileCreateInput {
  id: ID
  firstName: String!
  lastName: String!
  dateOfBirth: DateTime
  address: String
  countryOfOrigin: String
  user: UserCreateOneWithoutProfileInput!
}

input ProfileCreateOneWithoutUserInput {
  create: ProfileCreateWithoutUserInput
  connect: ProfileWhereUniqueInput
}

input ProfileCreateWithoutUserInput {
  id: ID
  firstName: String!
  lastName: String!
  dateOfBirth: DateTime
  address: String
  countryOfOrigin: String
}

type ProfileEdge {
  node: Profile!
  cursor: String!
}

enum ProfileOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  dateOfBirth_ASC
  dateOfBirth_DESC
  address_ASC
  address_DESC
  countryOfOrigin_ASC
  countryOfOrigin_DESC
}

type ProfilePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  firstName: String!
  lastName: String!
  dateOfBirth: DateTime
  address: String
  countryOfOrigin: String
}

type ProfileSubscriptionPayload {
  mutation: MutationType!
  node: Profile
  updatedFields: [String!]
  previousValues: ProfilePreviousValues
}

input ProfileSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProfileWhereInput
  AND: [ProfileSubscriptionWhereInput!]
  OR: [ProfileSubscriptionWhereInput!]
  NOT: [ProfileSubscriptionWhereInput!]
}

input ProfileUpdateInput {
  firstName: String
  lastName: String
  dateOfBirth: DateTime
  address: String
  countryOfOrigin: String
  user: UserUpdateOneRequiredWithoutProfileInput
}

input ProfileUpdateManyMutationInput {
  firstName: String
  lastName: String
  dateOfBirth: DateTime
  address: String
  countryOfOrigin: String
}

input ProfileUpdateOneRequiredWithoutUserInput {
  create: ProfileCreateWithoutUserInput
  update: ProfileUpdateWithoutUserDataInput
  upsert: ProfileUpsertWithoutUserInput
  connect: ProfileWhereUniqueInput
}

input ProfileUpdateWithoutUserDataInput {
  firstName: String
  lastName: String
  dateOfBirth: DateTime
  address: String
  countryOfOrigin: String
}

input ProfileUpsertWithoutUserInput {
  update: ProfileUpdateWithoutUserDataInput!
  create: ProfileCreateWithoutUserInput!
}

input ProfileWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  dateOfBirth: DateTime
  dateOfBirth_not: DateTime
  dateOfBirth_in: [DateTime!]
  dateOfBirth_not_in: [DateTime!]
  dateOfBirth_lt: DateTime
  dateOfBirth_lte: DateTime
  dateOfBirth_gt: DateTime
  dateOfBirth_gte: DateTime
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  countryOfOrigin: String
  countryOfOrigin_not: String
  countryOfOrigin_in: [String!]
  countryOfOrigin_not_in: [String!]
  countryOfOrigin_lt: String
  countryOfOrigin_lte: String
  countryOfOrigin_gt: String
  countryOfOrigin_gte: String
  countryOfOrigin_contains: String
  countryOfOrigin_not_contains: String
  countryOfOrigin_starts_with: String
  countryOfOrigin_not_starts_with: String
  countryOfOrigin_ends_with: String
  countryOfOrigin_not_ends_with: String
  user: UserWhereInput
  AND: [ProfileWhereInput!]
  OR: [ProfileWhereInput!]
  NOT: [ProfileWhereInput!]
}

input ProfileWhereUniqueInput {
  id: ID
}

type Query {
  authPayloads(where: AuthPayloadWhereInput, orderBy: AuthPayloadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AuthPayload]!
  authPayloadsConnection(where: AuthPayloadWhereInput, orderBy: AuthPayloadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AuthPayloadConnection!
  profile(where: ProfileWhereUniqueInput!): Profile
  profiles(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Profile]!
  profilesConnection(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProfileConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum Role {
  USER
  ADMIN
}

type Subscription {
  authPayload(where: AuthPayloadSubscriptionWhereInput): AuthPayloadSubscriptionPayload
  profile(where: ProfileSubscriptionWhereInput): ProfileSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  password: String!
  profile: Profile!
  role: Role!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  password: String!
  profile: ProfileCreateOneWithoutUserInput!
  role: Role!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutProfileInput {
  create: UserCreateWithoutProfileInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutProfileInput {
  id: ID
  email: String!
  password: String!
  role: Role!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  role_ASC
  role_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  password: String!
  role: Role!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  profile: ProfileUpdateOneRequiredWithoutUserInput
  role: Role
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  role: Role
}

input UserUpdateOneRequiredWithoutProfileInput {
  create: UserCreateWithoutProfileInput
  update: UserUpdateWithoutProfileDataInput
  upsert: UserUpsertWithoutProfileInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutProfileDataInput {
  email: String
  password: String
  role: Role
}

input UserUpsertWithoutProfileInput {
  update: UserUpdateWithoutProfileDataInput!
  create: UserCreateWithoutProfileInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  profile: ProfileWhereInput
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`