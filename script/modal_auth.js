const signInBtn = document.querySelector(".header-action__signin");
const signUpBtn = document.querySelector(".header-action__signup");
const authModal = document.querySelector(".auth-modal");
const authFrame = document.querySelector(".auth-frame");

export function initAuthModal() {
  signInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    authModal.classList.remove("hidden");

    //c1 Dùng hash hoặc query string để báo hiệu cho auth.html
    authFrame.src = "./auth.html#signin"; // truyền hash để auth.html biết mở form đăng nhập

    // c2 dùng post message thay vì hash
    authFrame.contentWindow.postMessage({ action: "signin" }, "*");
  });

  signUpBtn.addEventListener("click", () => {
    authModal.classList.remove("hidden");
    //C1
    // authFrame.src = "./auth.html#signup"; // truyền hash để auth.html biết mở form đăng ký
    //c2
    authFrame.contentWindow.postMessage({ action: "signup" }, "*");
  });

  document.querySelector(".auth-overlay").addEventListener("click", () => {
    authModal.classList.add("hidden");
    authFrame.src = ""; // reset iframe
  });

  const authContainer = document.querySelector(".auth-container");

  authModal.addEventListener("click", (e) => {
    // Nếu click không nằm trong auth-container thì đóng modal
    if (!authContainer.contains(e.target)) {
      authModal.classList.add("hidden");
    }
  });
}
