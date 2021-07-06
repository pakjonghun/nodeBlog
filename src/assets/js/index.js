import "regenerator-runtime";
import "../css/index.css";
import { getApiFetch, makeMenu } from "./util";

getApiFetch("/api").then((res) => {
  const {
    data: { post, user },
    error,
  } = res;

  if (error) {
    alert(error);
  }
  makeMenu(user);
  paint(post);
});

const postList = document.getElementById("posts__lists");

function paint(data) {
  const list = data
    .map(
      (item) =>
        ` <li class="posts__list">
          <a class="list__info" href="/post/${item._id}">
            <h3 class="info__title">${item.title}</h3>
            <span class="info__date">${
              item.createdAt && item.createdAt.substring(0, 10)
            }</span>
            <span class="info__date">${
              item.description && item.description.substring(0, 10)
            }</span>
          </a>
        </li>
        `
    )
    .join("");

  postList.innerHTML = list;
}
