import Post from "./Post.js";

const resolvers = {
  Query: {
    hello: () => {
      return "Hello World";
    },
    getAll: async () => {
      return await Post.find();
    },
    getById: async (parent, args, context, info) => {
      const { id } = args;
      const post = await Post.findOne({ _id: id });
      return post;
    },
  },

  Mutation: {
    createPost: async (parent, args, context, info) => {
      const { title, description } = args.post;
      const post = await new Post({ title, description }).save();
      return post;
    },

    updatePost: async (parent, args, context, info) => {
      const { id } = args;
      const { title, description } = args.post;
      const post = await Post.findByIdAndUpdate(
        id,
        { title, description },
        { new: true }
      );
      return post;
    },

    deletePost: async (parent, args, context, info) => {
      const { id } = args;
      if (!id) {
        return "Invalid id";
      }
      const post = await Post.findByIdAndRemove(id);
      return "Deleted";
    },
  },
};

export default resolvers;
