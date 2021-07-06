import Comment from "../models/commentModel";
import Post from "../models/postModel";

export const addComment = async (req, res) => {
  try {
    const { description, postId } = req.body;
    const user = res.locals.user;
    console.log(`아 여기로 넘어왔는데 유저가 없나?${user}`);
    console.log(res.locals.user);

    if (!user) {
      return res.send({
        data: { user },
        error: "로그인이 필요한 기능입니다.",
      });
    }

    if (!description.trim().length) {
      return res.send({ ok: false, error: "입력한 댓글 내용이 없습니다." });
    }

    const post = await Post.findById(postId);
    if (!post) {
      return res.send({ ok: false, error: "해당 포스트가 없습니다." });
    }

    const comment = await Comment.create({
      post: postId,
      description,
      user: user.id,
    });
    post.comments.push(comment._id);
    user.posts.push(post._id);
    delete user.password;
    await user.save();
    await post.save();
    res.send({ ok: true, data: comment._id });
  } catch (e) {
    console.log(e);
    res.send({ ok: false, error: "서버에서 오류가 발생했어요." });
  }
};

export const editComment = async (req, res) => {
  try {
    const user = res.locals.user;
    const { desc } = req.body;
    const { id } = req.params;

    if (!user) {
      return res
        .status(401)
        .send({ data: user, error: "로그인이 필요한 기능입니다." });
    }

    const comment = await Comment.findById(id);

    if (!comment) {
      return res.status(401).send({ ok: false, error: "댓글이 없습니다." });
    }

    const commentOwner = comment.user;
    const isMyComment = user.id === commentOwner;

    if (!isMyComment) {
      return res.status(401).send({ ok: false, error: "권한이 없습니다." });
    }

    await Comment.updateOne({ _id: id }, { $set: { description: desc } });

    return res.send({ ok: true });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .send({ ok: false, error: "서버에서 오류가 발생했어요." });
  }
};

export const delComment = async (req, res) => {
  try {
    const { id } = req.params;
    const user = res.locals.user;

    if (!user) {
      return res
        .status(401)
        .send({ data: user, error: "로그인이 필요한 기능입니다." });
    }

    const comment = await Comment.findById(id);

    if (!comment) {
      return res.status(401).send({ ok: false, error: "댓글이 없습니다." });
    }

    await Comment.remove({ _id: id });
    res.send({ ok: true });
  } catch (e) {
    console.log(e);
    res.status(500).send({ ok: false, error: "서버에서 에러가 발생했어요." });
  }
};
