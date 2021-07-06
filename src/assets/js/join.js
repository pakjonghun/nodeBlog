import "regenerator-runtime";
import { getApiFetch, makeMenu, postApiFetch } from "./util";

const data = getApiFetch("/api/join").then((res) => {
  const { data } = res;

  if (data) {
    alert("이미 로그인 되어 있습니다.");
    return (window.location.href = "/");
  }

  makeMenu(data);
});

const joinForm = document.getElementById("join__form");

async function postJoin(e) {
  e.preventDefault();
  const id = joinForm.querySelector("#join__id");
  const password = joinForm.querySelector("#join__password");
  const passwordConfirm = joinForm.querySelector("#join__password_confirm");

  const sendingData = {
    id: id.value,
    password: password.value,
    passwordConfirm: passwordConfirm.value,
  };
  const { ok, data, error, user } = await postApiFetch("/join", sendingData);

  if (ok) {
    // localStorage.setItem("token", data);
    alert("회원가입이 완료되었습니다.");
    window.location.href = "/login";
  } else {
    alert(error);
    id.value = "";
    password.value = "";
  }
}

if (joinForm) {
  joinForm.addEventListener("submit", postJoin);
}
