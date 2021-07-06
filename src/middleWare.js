import User from "./models/userModel";
import jwt from "jsonwebtoken";

export const authAndSaveResult = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    let token;

    if (authorization) token = authorization.split(" ").pop();

    if (!token) {
      return next();
    }

    const { id } = jwt.verify(token, process.env.SECRET);

    User.findOne({ id }).then((dbData) => {
      res.locals.user = dbData;
      next();
    });
  } catch (e) {
    console.log(e);
  } finally {
    next();
  }
};

export const privateProtect = (req, res, next) => {
  const user = res.locals.user;

  if (user) {
    next();
  } else {
    return res.status(401).send({ error: "로그인이 필요합니다." });
  }
};

export const publicAccess = (req, res, next) => {
  const loggedIn = res.locals.isLoggedIn;
  if (!loggedIn) {
    next();
  } else {
    return res
      .status(401)
      .send({ ok: false, error: "이미 로그인 되어 있습니다.." });
  }
};
