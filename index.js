import express from "express";
import "./db.js";
import env from "./env.js";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";

const startServer = async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app });
  app.listen(env.PORT, (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Listening on port ${env.PORT}.`);
  });
};
startServer();

// app.use(errorHandler);
// app.listen(env.PORT, (err) => {
//   if (err) {
//     console.error(err);
//     process.exit(1);
//   }
//   console.log(`Listening on port ${env.PORT}.`);
// });
