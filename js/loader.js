window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  setTimeout(function () {
    loader.className += " hidden";
  }, 800);
});
