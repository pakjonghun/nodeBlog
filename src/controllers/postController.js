import Post from "../models/postModel";

export const getAddPost = (req, res) => {
  res.render("add", { title: "글쓰기" });
};

export const postAddPost = async (req, res) => {
  try {
    const { user } = res.locals;
    const { title, description } = req.body;
    try {
      const post = await Post.create({ title, description, user: user.id });
      user.posts.push(post._id);

      await user.save();
      res.send({ ok: true });
    } catch (e) {
      console.log(e);
      res.send({ ok: false, error: "서버에서 에러가 발생했어요." });
    }
  } catch (e) {
    console.log(e);
  }
};

export const detail = (req, res) => {
  res.render("detail", { title: "포스트내용" });
};

export const postDetail = async (req, res) => {
  const { id } = req.params;
  const { user } = res.locals;

  try {
    const post = await Post.findOne({ _id: id })
      .populate("comments")
      .sort({ createdAt: 1 })
      .exec();

    if (!post) {
      return res.send({ ok: 0, erorr: "포스트가 존재하지 않습니다.", user });
    }
    res.send({ ok: true, data: post });
  } catch (e) {
    console.log(e);
    res.send({ ok: 1, error: "서버에서 에러가 발생했습니다.", user });
  }
};
