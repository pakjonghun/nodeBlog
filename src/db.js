import "dotenv/config";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://test:test@localhost:27017/admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .catch((err) => console.log(err));

const db = mongoose.connection;

db.on("error", (err) => console.log(err));
db.once("open", () => console.log("DB is running "));
