import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const Post = mongoose.model("post", postSchema);

export default Post;
