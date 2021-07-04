import express from "express";
import { homeApi } from "../controllers/globalController";
import { postDetail } from "../controllers/postController";

const apiRouter = express.Router();

apiRouter.get("/", homeApi);

apiRouter.get("/:id", postDetail);

export default apiRouter;
