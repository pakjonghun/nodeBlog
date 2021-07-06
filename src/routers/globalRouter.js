import express from "express";
import { allow } from "joi";
import {
  getJoin,
  getLogin,
  home,
  postJoin,
  postLogin,
} from "../controllers/globalController";
import { publicAccess } from "../middleWare";

const globalRouter = express.Router();

globalRouter.get("/", home);

globalRouter.route("/join").get(getJoin).post(postJoin);

globalRouter.route("/login").get(getLogin).post(postLogin);

export default globalRouter;
