import Comment from "../models/commentModel";
import Post from "../models/postModel";

export const addComment = async (req, res) => {
  try {
    const { description, postId } = req.body;
    if (!description.trim().length) {
      return res.send({ ok: false, error: "댓글 내용이 없습니다." });
    }
    const user = res.locals.user;

    const post = await Post.findById(postId);
    if (!post) {
      return res.send({ ok: false, error: "해당 포스트가 없습니다." });
    }

    const comment = await Comment.create({
      post: postId,
      description,
      user: user.id,
    });
    post.comments.push(post._id);
    user.posts.push(post._id);
    await user.save();
    await post.save();
    res.send({ ok: true, data: comment._id });
  } catch (e) {
    console.log(e);
    res.send({ ok: 1, error: "서버에서 오류가 발생했어요." });
  }
};

export const editComment = async (req, res) => {
  try {
    const { desc, commentID } = req.body;
    await Comment.updateOne(
      { _id: commentID },
      { $set: { description: desc } }
    );

    return res.send({ ok: true });
  } catch (e) {
    console.log(e);
    return res.send({ ok: 1, error: "서버에서 오류가 발생했어요." });
  }
};

export const delComment = async (req, res) => {
  try {
    const { id } = req.body;
    await Comment.remove({ _id: id });
    res.send({ ok: true });
  } catch (e) {
    console.log(e);
    res.send({ ok: 1, error: "서버에서 에러가 발생했어요." });
  }
};
