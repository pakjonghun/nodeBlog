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
  console.log(`디스 패스워드${this.password}`);
  if (this.isModified) this.password = await bcrypt.hash(this.password, 10);
  console.log(`바꾼후 패스워드${this.password}`);
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
