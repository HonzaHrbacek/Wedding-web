const parallax1 = document.getElementById("parallax-1");

window.addEventListener("scroll", function () {
  let offset = window.scrollY;
  parallax1.style.backgroundPositionY = offset * -0.1 + "px";
});
