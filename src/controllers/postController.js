import Post from "../models/postModel";

export const postAddPost = async (req, res) => {
  try {
    const { user } = res.locals;

    if (!user) {
      return res.status(401).send({ data: user, error: "로그인 하세요" });
    }

    const { title, description } = req.body;

    const post = await Post.create({ title, description, user: user.id });
    user.posts.push(post._id);

    await user.save();
    res.send({ ok: true, data: user });
  } catch (e) {
    console.log(e);
    res.send({ ok: false, error: "서버에서 에러가 발생했어요.", data: user });
  }
};

export const detail = (req, res) => {
  res.render("detail", { title: "포스트내용" });
};

export const postDetailApi = async (req, res) => {
  const { id } = req.params;
  const { user } = res.locals;
  console.log(`${user}api 포스트 아이디 부분`);

  try {
    const post = await Post.findOne({ _id: id })
      .populate("comments")
      .sort({ createdAt: -1 })
      .exec();

    if (!post) {
      return res.status(400)({
        ok: false,
        erorr: "포스트가 존재하지 않습니다.",
        data: user,
      });
    }
    res.send({ ok: true, data: { post, user } });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .send({ ok: 1, error: "서버에서 에러가 발생했습니다.", user });
  }
};

export const postAddApi = (req, res) => {
  try {
    const user = res.locals.user;
    return res.send({ ok: true, data: user });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      ok: false,
      error: "서버에서 에러가 발생했습니다.",
      data: user,
    });
  }
};

export const getAddPost = (req, res) => {
  res.render("add", { title: "글쓰기" });
};
