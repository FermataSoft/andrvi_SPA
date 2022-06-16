function hide_preloader() {
  const preloader = document.querySelector(".loader");
  const mainContent = document.querySelector("main");

  setTimeout(() => {
    if (!preloader.classList.contains("pageLoad_done")) {
      preloader.classList.add("pageLoad_done");
      mainContent.classList.add("pageLoaded");
    }
  }, 1000);
}

window.onload = function () {
  hide_preloader();
};
