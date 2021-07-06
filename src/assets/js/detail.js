import "regenerator-runtime";
import {
  getApiFetch,
  makeMenu,
  otherApiFecth,
  postApiFetch,
  tagMaker,
} from "./util";

const detail__post = document.getElementById("detail__post");
const comments__list = document.getElementById("comments__list");
const comment__form = document.getElementById("comment__form");
const url = window.location.href.split("/");
const id = url[url.length - 1];

getApiFetch(`/api/post/${id}`).then((res) => {
  const { ok, data, error } = res;

  window.user = data.user || "";

  if (!ok) {
    alert(error);
    return (window.location.href = "/");
  }

  makeMenu(data.user);
  paintDetail(data.post);
  paintCommentFirst(data.post.comments, data.user);
});

function paintCommentFirst(comment, user) {
  const commentsLists = comment
    .reverse()
    .map((item) => {
      if (user) {
        return `    
        <li class="list__comment">
            <span class="Acomment__writer">${item.user}</span>
            <span class="Acomment__description">${item.description}</span>
          ${
            item.user === user.id
              ? `<button id="${item._id}" class='comment_editBtn'>편집</button>
                <button id=${item._id} class='comment_removeBtn'>삭제</button>`
              : ""
          }
        </li>`;
      } else {
        return `
        <li class="list__comment">
          <span class="Acomment__writer">${item.user}</span>
          <span class="Acomment__description">${item.description}</span>
        </li>`;
      }
    })
    .join("");

  comments__list.innerHTML = commentsLists;

  const nodes = Array.from(comments__list.children);
  nodes.forEach((item) => {
    const editItem = item.querySelector(".comment_editBtn");
    if (editItem) {
      editItem.addEventListener("click", commentEdit);
    }

    const delItem = item.querySelector(".comment_removeBtn");
    if (delItem) {
      delItem.addEventListener("click", deleteComment);
    }
  });
}

function paintDetail(post) {
  const { createdAt, title, description, comments } = post;

  const tags = `<span class="deatil__createdAt">
        ${createdAt && createdAt.substring(0, 10)}
        </span>
        <input
        readonly
        type="text"
        id="detail__title"
        class="add__title detail__title"
        placeholder=${title && title}
        />

        <textarea
        readonly
        class="add__descriptioin detail__description"
        id="detail__description"
        cols="30"
        rows="10"
        >${description && description}
        </textarea>`;

  detail__post.innerHTML = tags;
}

async function addComment(e) {
  e.preventDefault();
  const commentInput = comment__form.querySelector("input");
  const description = commentInput.value;

  if (!description.trim().length) {
    return alert("댓글 내용을 입력하세요.");
  }

  const userId = window.user && window.user.id;

  const sendingData = { userId, description, postId: id };
  const { ok, error, data } = await postApiFetch("/comment/add", sendingData);
  if (ok === undefined && data === undefined) {
    alert(error);
    return (window.location.href = "/login");
  }

  if (!ok) {
    return alert(error);
  }

  const newDesc = commentInput.value;
  paintComment(userId, newDesc, data);

  commentInput.value = "";
}

if (comment__form) {
  comment__form.addEventListener("submit", addComment);
}

function paintComment(user, description, commentId) {
  const li = tagMaker("li", "list__comment");
  const writer = tagMaker("span", "Acomment__writer", user);
  const desc = tagMaker("span", "Acomment__description", description);
  const editBtn = tagMaker("button", "edit_btn", "편집");
  const deleteBtn = tagMaker("button", "delete_btn", "삭제");
  editBtn.id = commentId;
  deleteBtn.id = commentId;
  li.append(writer, desc, editBtn, deleteBtn);

  editBtn.addEventListener("click", commentEdit);
  deleteBtn.addEventListener("click", deleteComment);

  comments__list.prepend(li);
}

async function commentEdit() {
  const oldDesc = this.parentElement.querySelector(".Acomment__description");
  const oldDescValue = oldDesc.innerText;
  const commentID = this.id;
  let editDesc = prompt(
    `${window.user && window.user.id}님 댓글 변경 내용을 입력하세요.`,
    oldDescValue
  );

  if (!editDesc || !editDesc.trim().length) {
    return alert("댓글 내용을 채우세요.");
  }

  const { ok, error, data } = await otherApiFecth(
    `/comment/edit/${commentID}`,
    {
      desc: editDesc,
    },
    "PATCH"
  );

  if (ok === undefined && data === undefined) {
    alert(error);
    return (window.location.href = "/login");
  }

  if (!ok) {
    return alert(error);
  }
  oldDesc.innerText = editDesc;
}

async function deleteComment() {
  let isTrue = confirm(`${window?.user?.id}님 정말 댓글을 삭제 하시겠습니까?`);
  if (!isTrue) return;

  const commentId = this.id;
  const { ok, error } = await otherApiFecth(
    `/comment/delete/${commentId}`,
    {},
    "DELETE"
  );

  console.log(ok);

  if (ok === undefined) {
    alert(error);
    return (window.location.href = "/login");
  }

  if (!ok) return alert(error);

  return this.parentElement.remove();
}
