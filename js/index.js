setMenuWidth();
document.querySelector(".imgBtn1").addEventListener("click", function () {
  document.querySelector(".bannerContainer").style.transform = "translate(0px)";
});
document.querySelector(".imgBtn2").addEventListener("click", function () {
  document.querySelector(".bannerContainer").style.transform =
    "translate(-250px)";
});
document.querySelector(".imgBtn3").addEventListener("click", function () {
  document.querySelector(".bannerContainer").style.transform =
    "translate(-500px)";
});

function setMenuWidth() {
  let windowWidth;
  let wrapWidth;
  windowWidth = $(window).width();
  // wrapWidth = $(window).width();
  $("#header").css("width", windowWidth);
  $("#footer").css("width", wrapWidth);
  $(window).resize(function (event) {
    windowWidth = $(window).width();
    console.log("windowWidth:", windowWidth);
    $("#header").css("width", windowWidth);
    // $("#footer").css("width", window);
  });
}
