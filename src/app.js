import express from "express";
import Http from "http";
import globalRouter from "./routers/globalRouter";
import postRouter from "./routers/postRouter";
import morgan from "morgan";
import apiRouter from "./routers/apiRouter";
import commentsRouter from "./routers/commentsRouter";
import { authAndSaveResult } from "./middleWare";

const app = express();
const server = Http.createServer(app);
app.set("view engine", "ejs");
app.set("views", process.cwd() + "/src/views");

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(process.cwd() + "/assets"));
app.use("/post/static", express.static(process.cwd() + "/assets"));

app.use(authAndSaveResult);

app.use("/", globalRouter);
app.use("/api", apiRouter);
app.use("/post", postRouter);
app.use("/comment", commentsRouter);

export default server;
