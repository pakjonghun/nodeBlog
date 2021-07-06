import express from "express";
import {
  addComment,
  delComment,
  editComment,
} from "../controllers/commentController";

const commentsRouter = express.Router();

commentsRouter.post("/add", addComment);
commentsRouter.patch("/edit/:id", editComment);
commentsRouter.delete("/delete/:id", delComment);

export default commentsRouter;
