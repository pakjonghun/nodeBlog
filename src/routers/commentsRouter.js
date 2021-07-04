import express from "express";
import {
  addComment,
  delComment,
  editComment,
  getComments,
} from "../controllers/commentController";
import { authMiddleWare } from "../middleWare";

const commentsRouter = express.Router();

commentsRouter.post("/add", authMiddleWare, addComment);
commentsRouter.patch("/edit", authMiddleWare, editComment);
commentsRouter.delete("/delete", authMiddleWare, delComment);

export default commentsRouter;
