import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },

  user: { type: String, required: true },

  description: {
    type: String,
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Post",
  },
});

export default mongoose.model("Comment", commentSchema);
