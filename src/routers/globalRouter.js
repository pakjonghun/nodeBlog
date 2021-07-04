import express from "express";
import { allow } from "joi";
import {
  getJoin,
  getLogin,
  home,
  isMine,
  meApi,
  postJoin,
  postLogin,
} from "../controllers/globalController";
import { authMiddleWare, privateMiddleWare } from "../middleWare";

const globalRouter = express.Router();

globalRouter.get("/", home);

globalRouter.get("/me", authMiddleWare, meApi);

globalRouter.get("/isMine/:commentId", authMiddleWare, isMine);

globalRouter.route("/join").get(getJoin).post(postJoin);

globalRouter.route("/login").get(getLogin).post(postLogin);

export default globalRouter;
