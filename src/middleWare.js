import User from "./models/userModel";
import jwt from "jsonwebtoken";

export const authMiddleWare = async (req, res, next) => {
  let tokenArray = req.headers.authorization;
  if (!tokenArray) {
    return res.send({ ok: false, error: "토큰이 없습니다." });
  }

  if (tokenArray) {
    tokenArray = tokenArray.split(" ");

    if (tokenArray[0] !== "Bearer") {
      return res.send({ ok: false, error: "토큰형식이 잘못됬습니다." });
    }

    try {
      const token = tokenArray[1];
      const { id } = jwt.verify(token, process.env.SECRET);
      const user = await User.findOne({ id }).populate("posts");
      res.locals.user = user;
      next();
    } catch (e) {
      console.log(e);
      return res.send({ ok: false, error: "토큰 형식이 잘못되었습니다." });
    }
  }
};
