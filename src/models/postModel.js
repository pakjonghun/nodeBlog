import mongoose, { model } from "mongoose";

const postSchema = new mongoose.Schema({
  createdAt: {
    required: true,
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      required: true,
    },
  ],
});

export default mongoose.model("Post", postSchema);
