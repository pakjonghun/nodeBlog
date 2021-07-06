import express from "express";
import { detail, getAddPost, postAddPost } from "../controllers/postController";

const postRouter = express.Router();

postRouter.route("/add").get(getAddPost).post(postAddPost);
postRouter.get("/:id", detail);
postRouter.get("/add", getAddPost);

export default postRouter;
