import { ApolloServer } from 'apollo-server-lambda';
import * as middy from 'middy';
import { doNotWaitForEmptyEventLoop } from 'middy/middlewares';

import { resolvers, typeDefs } from './graphql';
import { database } from './middlewares';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
});

const apolloServerHandler = apolloServer.createHandler({
  cors: {
    origin: true,
    credentials: true,
  },
});

export const handler = middy(apolloServerHandler)
  .use(doNotWaitForEmptyEventLoop({ runOnError: true }))
  .use(database())
