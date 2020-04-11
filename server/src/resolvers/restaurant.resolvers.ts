import { QueryResolvers, MutationResolvers } from "../../generated/resolvers-types";

const queryResolvers: QueryResolvers = {
  restaurants: (parent, args, context) => context.prisma.restaurants(),
  restaurant: (parent, args, context) => context.prisma.restaurant({
    id: args.id
  })
}

const queryMutations: MutationResolvers = {
  createRestaurant: (parent, args, context) => context.prisma.createRestaurant({
    name: args.name,
    image: args.image
  })
}

export default {
  Query: queryResolvers,
  Mutation: queryMutations
};