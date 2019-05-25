import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./generated/prisma-client";
import ora from "ora";
import resolvers from "./resolvers";

interface ServerOptions {
  port: string
  endpoint: string
  subscriptions: string
  playground: string
}

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: resolvers as any,
  // mocks: mocks <= add mocks here
  context: request => ({
    ...request,
    prisma
  })
});

const options: ServerOptions = {
  port: process.env.PORT,
  endpoint: "/",
  subscriptions: "/sub",
  playground: "/playground"
};

server.start(options, ({ port }) => {
  const spinner = ora().start();
  setTimeout(() => {
    console.log(`Server starting up...`);
    spinner.stop();
  }, 1000);
  spinner.start();
  setTimeout(() => {
    console.log(`Authentication API has started! Open on port: ${port}`);
    spinner.stop();
  }, 1000);
});
