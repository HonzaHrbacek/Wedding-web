$(".navbar a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate({ scrollTop: $(hash).offset().top - 50 }, 800);
  }
});

$("#btn-main").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: $("#kdy-kde").offset().top - 50 }, 800);
});
