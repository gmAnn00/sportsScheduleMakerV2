setMenuWidth();
changeMenu();

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

function changeMenu() {
  let scrollTop;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    if (scrollTop != 0) {
      $("#header").css("background", "#fff");
      $("#header").css("border", "1px solid #ccc");
      $(".mainMenu > li > a").css("color", "#000");
      $(".mainMenu > li:last-child a").css("color", "#fff");
    } else {
      $("#header").css("background", "#7b92d3");
      $("#header").css("border", "none");
      $(".mainMenu > li > a").css("color", "#fff");
    }
  });
}
