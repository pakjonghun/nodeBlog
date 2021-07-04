import express from "express";
import { detail, getAddPost, postAddPost } from "../controllers/postController";
import { authMiddleWare } from "../middleWare";

const postRouter = express.Router();

postRouter.route("/add").get(getAddPost).all(authMiddleWare).post(postAddPost);

postRouter.get("/:id", detail);

export default postRouter;
