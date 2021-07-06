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

globalRouter.route("/join").all(publicAccess).get(getJoin).post(postJoin);

globalRouter.route("/login").all(publicAccess).get(getLogin).post(postLogin);

export default globalRouter;
