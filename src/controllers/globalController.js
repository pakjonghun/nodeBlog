import bcrypt from "bcrypt";
import Joi from "joi";
import User from "../models/userModel";
import jwt from "jsonwebtoken";
import Post from "../models/postModel";
import Comment from "../models/commentModel";

export const getJoin = (req, res) => {
  res.render("join.ejs", { title: "회원가입" });
};

export const postJoin = async (req, res) => {
  const { id, password, passwordConfirm } = req.body;

  if (password !== passwordConfirm) {
    return res.send({ ok: false, error: "비밀번호를 다시 확인하세요" });
  }

  if (password.includes(id)) {
    return res.send({
      ok: false,
      error: "비밀번호에 닉네임이 포함 될 수 없습니다.",
    });
  }

  const schema = Joi.object({
    id: Joi.string().min(3).pattern(new RegExp("^[a-zA-z0-9]")),
    password: Joi.string().min(4),
  });

  try {
    const user = await User.exists({ id });
    console.log(user);

    if (user) {
      return res.send({ ok: false, error: "중복된 닉네임 입니다.." });
    }

    const { _, error } = schema.validate({ id, password });

    if (error) {
      const errorPath = error["details"][0]["path"][0];
      console.log(error);
      return res.send({ ok: false, error: `${errorPath}를 다시 확인하세요` });
    }

    const resul = await User.create({ id, password });
    console.log(resul);
    const token = jwt.sign({ id }, process.env.SECRET);
    return res.send({ ok: true, data: token });
  } catch (e) {
    console.log(e);
    return res.send({ ok: false, error: "서버 오류가 발생했습니다." });
  }
};

export const getLogin = async (req, res) => {
  res.render("login", { title: "로그인" });
};

export const postLogin = async (req, res) => {
  const { id, password } = req.body;
  console.log(id, password);
  try {
    const user = await User.findOne({ id });
    if (!user) {
      return res.send({ ok: false, error: "계정이 존재하지 않습니다." });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    console.log(user.password);
    console.log(isPasswordCorrect);

    if (!isPasswordCorrect) {
      return res.send({ ok: false, error: "계정정보가 틀립니다." });
    }

    const token = jwt.sign({ id }, process.env.SECRET);
    return res.send({ ok: true, data: token });
  } catch (e) {
    console.log(e);
    return res.send({ ok: false, error: "서버 오류가 발생했습니다." });
  }
};

export const home = (req, res) => {
  return res.render("index.ejs", { title: "메인화면" });
};
export const homeApi = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const tokenArray = token.trim().split(" ");
    tokenArray.shift();
    const posts = await Post.find({}).sort({ createdAt: -1 });
    return res.send({
      ok: true,
      data: posts,
      error: null,
      user: tokenArray[0] !== "null" ? true : false,
    });
  } catch (e) {
    console.log(e);
    return res.send({
      ok: false,
      error: "서버에서 에러가 발생했어요.",
    });
  }
};

export const meApi = (req, res) => {
  try {
    const user = res.locals.user;
    return res.send({ ok: !!user, data: user.id, user });
  } catch (e) {
    console.log(e);
    return res.send({ ok: false, error: "서버 오류가 발생했습니다." });
  }
};

export const isMine = async (req, res) => {
  try {
    const user = res.locals.user;
    const { commentId } = req.params;
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.send({ ok: 0, error: "댓글이 없습니다." });
    }

    const commentOwner = comment.user;
    const isMyComment = user.id === commentOwner;
    if (!isMyComment) {
      return res.send({ ok: 2, error: "권한이 없습니다." });
    } else if (isMyComment) {
      return res.send({ ok: true });
    }
  } catch (e) {
    console.log(e);
    return res.send({ ok: 1, error: "서버에서 오류가 발생했어요." });
  }
};

export function pow(req, res) {
  return req + res;
}
