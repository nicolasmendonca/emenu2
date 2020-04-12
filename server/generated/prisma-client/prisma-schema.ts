// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateRestaurant {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createRestaurant(data: RestaurantCreateInput!): Restaurant!
  updateRestaurant(data: RestaurantUpdateInput!, where: RestaurantWhereUniqueInput!): Restaurant
  updateManyRestaurants(data: RestaurantUpdateManyMutationInput!, where: RestaurantWhereInput): BatchPayload!
  upsertRestaurant(where: RestaurantWhereUniqueInput!, create: RestaurantCreateInput!, update: RestaurantUpdateInput!): Restaurant!
  deleteRestaurant(where: RestaurantWhereUniqueInput!): Restaurant
  deleteManyRestaurants(where: RestaurantWhereInput): BatchPayload!
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

type Query {
  restaurant(where: RestaurantWhereUniqueInput!): Restaurant
  restaurants(where: RestaurantWhereInput, orderBy: RestaurantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Restaurant]!
  restaurantsConnection(where: RestaurantWhereInput, orderBy: RestaurantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RestaurantConnection!
  node(id: ID!): Node
}

type Restaurant {
  id: ID!
  name: String!
  image: String!
  slug: String!
  address: String!
}

type RestaurantConnection {
  pageInfo: PageInfo!
  edges: [RestaurantEdge]!
  aggregate: AggregateRestaurant!
}

input RestaurantCreateInput {
  id: ID
  name: String!
  image: String!
  slug: String!
  address: String!
}

type RestaurantEdge {
  node: Restaurant!
  cursor: String!
}

enum RestaurantOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  image_ASC
  image_DESC
  slug_ASC
  slug_DESC
  address_ASC
  address_DESC
}

type RestaurantPreviousValues {
  id: ID!
  name: String!
  image: String!
  slug: String!
  address: String!
}

type RestaurantSubscriptionPayload {
  mutation: MutationType!
  node: Restaurant
  updatedFields: [String!]
  previousValues: RestaurantPreviousValues
}

input RestaurantSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RestaurantWhereInput
  AND: [RestaurantSubscriptionWhereInput!]
  OR: [RestaurantSubscriptionWhereInput!]
  NOT: [RestaurantSubscriptionWhereInput!]
}

input RestaurantUpdateInput {
  name: String
  image: String
  slug: String
  address: String
}

input RestaurantUpdateManyMutationInput {
  name: String
  image: String
  slug: String
  address: String
}

input RestaurantWhereInput {
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
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
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
  AND: [RestaurantWhereInput!]
  OR: [RestaurantWhereInput!]
  NOT: [RestaurantWhereInput!]
}

input RestaurantWhereUniqueInput {
  id: ID
  slug: String
}

type Subscription {
  restaurant(where: RestaurantSubscriptionWhereInput): RestaurantSubscriptionPayload
}
`