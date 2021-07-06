import "regenerator-runtime";
import { getApiFetch, makeMenu, postApiFetch } from "./util";

getApiFetch("/api/login").then((res) => {
  const { data } = res;

  if (data) {
    alert("로그인 되어 있습니다.");
    return (window.location.href = "/");
  }

  makeMenu(data);
});

const loginForm = document.getElementById("login_submit");
const loginBox = document.getElementById("login__form");
async function login() {
  const id = loginBox.querySelector(".common__id");
  const password = loginBox.querySelector(".common__password");
  const sendingData = { id: id.value, password: password.value };
  const { ok, data, error } = await postApiFetch("/login", sendingData);
  const idTemp = id.value;
  id.value = "";
  password.value = "";
  if (ok) {
    alert(`${idTemp}님 환영합니다.`);
    window.location.href = "/";
    localStorage.setItem("token", data);
  } else {
    alert(error);
  }
}

if (loginForm) {
  loginForm.addEventListener("click", login);
}
