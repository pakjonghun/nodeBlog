import "regenerator-runtime";
import { getApiFetch, makeMenu, postApiFetch } from "./util";

const add__post = document.getElementById("add__post");
const add__title = document.getElementById("add__title");
const post__description = document.getElementById("post__description");

getApiFetch("/api/add").then((res) => {
  const { data, ok, error } = res;

  if (!data) {
    alert(error);
    return (window.location.href = "/login");
  }

  if (!ok) {
    return alert(error);
  }

  makeMenu(data);
});

if (add__post) {
  add__post.addEventListener("submit", async function (e) {
    e.preventDefault();

    const title = add__title.value;
    const description = post__description.value;

    add__title.value = "";
    post__description.value = "";

    const { ok, error, data } = await postApiFetch("/post/add", {
      title,
      description,
    });

    if (!data) {
      alert(error);
      return (window.location.href = "/login");
    }

    if (!ok) {
      alert(error);
    }

    return (window.location.href = "/");
  });
}
