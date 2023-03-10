setMenuWidth();

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
