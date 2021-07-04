import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

userSchema.pre("save", async function () {
  if (this.isModified) this.password = await bcrypt.hash(this.password, 10);
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
