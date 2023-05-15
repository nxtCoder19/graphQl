import mongoose from "mongoose";
import env from "./env.js";

mongoose.connect(env.MONGODB_URI, {
  dbName: "graphql-crud",
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useFindAndModify: false,
});

mongoose.connection.on(
  "error",
  console.error.bind(console, "connection error:")
);
mongoose.connection.on("connected", (err) => {
  if (err) {
    console.error("could not connect to mongodb because", err);
    process.exit(1);
  }
  console.log("DB connected...");
});
