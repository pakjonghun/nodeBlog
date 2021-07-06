import express from "express";
import { apiLoginAndJoin, homeApi } from "../controllers/globalController";
import { postAddApi, postDetailApi } from "../controllers/postController";

const apiRouter = express.Router();

apiRouter.get("/", homeApi);
apiRouter.get("/add", postAddApi);
apiRouter.get("/login", apiLoginAndJoin);
apiRouter.get("/join", apiLoginAndJoin);
apiRouter.get("/post/:id", postDetailApi);

export default apiRouter;
