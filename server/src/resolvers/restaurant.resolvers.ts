import { QueryResolvers } from "../../generated/resolvers-types";

const queryResolvers: QueryResolvers = {
  restaurants: (parent, args, context) => context.prisma.restaurants(),
  restaurant: (parent, args, context) => context.prisma.restaurant({
    slug: args.slug
  })
}

export default {
  Query: queryResolvers,
};