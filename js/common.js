setMenuWidth();
changeMenu();

let menuColor = false;

$(".mainMenu > li")
  .not(".liReserve")
  .hover(
    function () {
      $(this).find("ul").stop().slideDown("fast");
      // $(this).find("ul").slideDown("fast");

      if (menuColor) {
        $(this).children("a").css({
          color: "#7b92d3",
        });
      } else {
        $(this).children("a").css({
          color: "#000",
        });
      }
    },
    function () {
      $(this).find("ul").slideUp("fast");
      if (menuColor) {
        $(this).children("a").css({
          color: "#000",
        });
      } else {
        $(this).children("a").css({
          color: "#fff",
        });
      }
    }
  );

$(".mainMenu > li.liReserve").hover(
  function () {
    $(this).children("a").css({
      color: "#000",
    });
    $(this).css("background", "#ffd400");
  },
  function () {
    $(this).children("a").css({
      color: "#fff",
    });
    $(this).css("background", "#000");
  }
);

function setMenuWidth() {
  let windowWidth;
  let wrapWidth;
  windowWidth = $(window).width();
  // wrapWidth = $(window).width();
  $("#header").css("width", windowWidth);
  $("#footer").css("width", wrapWidth);
  $(window).resize(function (event) {
    windowWidth = $(window).width();
    // console.log("windowWidth:", windowWidth);
    $("#header").css("width", windowWidth);
    // $("#footer").css("width", window);
  });
}

function changeMenu() {
  let scrollTop;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    if (scrollTop != 0) {
      menuColor = true;
      $("#header").css("background", "#fff");
      $("#header").css("border", "1px solid #ccc");
      $(".mainMenu > li > a").css("color", "#000");
      $(".mainMenu > li:last-child a").css("color", "#fff");
    } else {
      menuColor = false;
      $("#header").css("background", "#7b92d3");
      $("#header").css("border", "none");
      $(".mainMenu > li > a").css("color", "#fff");
    }
  });
}
