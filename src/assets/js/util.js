const getFetch = (url) => {
  try {
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  } catch (e) {
    console.log(e);
    alert("통신오류 입니다.");
  }
};

const otherFetch = (url, data, method) => {
  try {
    return fetch(url, {
      method: method || "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
    alert("통신오류입니다.");
  }
};

export const getApiFetch = async (url) => {
  const result = await getFetch(url);
  return result.json();
};

export const postApiFetch = async (url, data) => {
  const result = await otherFetch(url, data);
  return result.json();
};

export const otherApiFecth = async (url, data, method) => {
  const result = await otherFetch(url, data, method);
  return result.json();
};

export const tagMaker = (tagName, className, value) => {
  const item = document.createElement(tagName);
  item.classList.add(className);
  if (value) {
    item.innerText = value;
  }
  return item;
};

export const makeMenu = (user) => {
  const menu = document.getElementById("menu");
  const btns = !user
    ? `<button class="login_btn" id="login_btn",
        onclick="window.location.href='/login'">
        로그인
      </button>
      <button class="join_btn" id="join_btn" onclick="window.location.href='/join'">
        회원가입
      </button>`
    : `<button
        onclick="window.location.href='/post/add'"
        class="post_btn"
        id="post_btn" onclick="/post/add">
        글쓰기
      </button>
      <button class="logout" id="logout">
        로그아웃
      </button>`;

  menu.innerHTML = btns;

  const logoutBtn = menu.querySelector("#logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("token");
      window.location.href = "/";
    });
  }
};
