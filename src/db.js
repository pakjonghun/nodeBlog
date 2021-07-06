import "dotenv/config";
import mongoose from "mongoose";
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((err) => console.log(err));

const db = mongoose.connection;

db.on("error", (err) => console.log(err));
db.once("open", () => console.log("DB is running "));
