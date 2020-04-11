import { GraphQLServer } from 'graphql-yoga'
import { default as typeDefs } from "./typeDefs";
import { default as resolvers } from "./resolvers";
import { default as context } from './context';

const options = { port: 4004 };

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context
})

server
  .start(options, () => {
    console.log(`Server running on http://localhost:${options.port}`);
  })
  .catch(err => console.error("connection Error", err));
