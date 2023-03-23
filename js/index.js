// 비주얼 콘텐츠 영역
// $("#visualContents > img").delay(500).animate({
//   left: 200,
// });
$("#visualContents > img").animate({
  left: 0,
});
$("#visualContents > p").first().delay(500).slideDown("slow");
$("#visualContents > p").last().delay(1000).slideDown("slow");

// 스포츠 콘텐츠 영역
$(window).scroll(function () {
  scrollTop = $(window).scrollTop();
  // console.log(scrollTop);
  if (scrollTop >= 380) {
    showSportsImg();
  }
});
function showSportsImg() {
  $("#sportsContainer div.visualImg")
    .first()
    .show("normal", function showNext() {
      $(this).next("div.visualImg").show("nomal", showNext);
    });
}

// 공지사항 콘텐츠 영역 이미지 슬라이더
let index = 0;
moveSlider(index);

$("div.imgBtns > button").click(function () {
  index = $(this).index();
  // console.log(index);
  moveSlider(index);
});

function moveSlider(index) {
  // console.log(index);
  $("div.bannerContainer").animate(
    {
      left: -(250 * index),
    },
    "fast"
  );

  $("div.imgBtns > button").removeClass("active");
  $("div.imgBtns > button").eq(index).addClass("active");
}

// 복싱 애니메이션
let boxing;
$("#sportsContainer div.boxing").hover(
  function () {
    // console.log("hover");
    moveboxing();
    boxing = setInterval(moveboxing, 3300);
  },
  function () {
    // console.log("over");
    clearInterval(boxing);
    $(this).children("img").last().css({
      left: 100,
      top: 20,
    });
  }
);

function moveboxing() {
  $("div.boxing").children("img").last().animate(
    {
      left: 80,
      top: 10,
    },
    1000,
    "easeOutElastic"
  );
  $("div.boxing").children("img").last().animate(
    {
      left: 100,
      top: 20,
    },
    500
  );
  $("div.boxing").children("img").last().animate(
    {
      left: 120,
      top: 10,
    },
    1000,
    "easeOutElastic"
  );
  $("div.boxing").children("img").last().animate(
    {
      left: 100,
      top: 20,
    },
    500
  );
}

// 수영 애니메이션
let swimming;
$("#sportsContainer div.swimming").hover(
  function () {
    moveswimming();
    swimming = setInterval(moveswimming, 1400);
  },
  function () {
    clearInterval(swimming);
    $(this).children("img").last().removeClass("animate");
    $(this).children("img").last().css({
      left: 70,
      top: 115,
    });
  }
);

function moveswimming() {
  $("div.swimming")
    .children("img")
    .last()
    .animate(
      {
        left: 140,
        top: 100,
      },
      "slow",
      function () {
        $("div.swimming").children("img").last().addClass("swimmingAni");
      }
    );

  $("div.swimming")
    .children("img")
    .last()
    .animate(
      {
        left: 70,
        top: 115,
      },
      "slow",
      function () {
        $("div.swimming").children("img").last().removeClass("swimmingAni");
      }
    );
}

// 클라이밍 애니메이션
let climbing;
$("div.climbing").hover(
  function () {
    moveclimbing();
    climbing = setInterval(moveclimbing, 4000);
  },
  function () {
    clearInterval(climbing);
    $("div.climbing").children("img").eq(1).removeClass("climbingAni");
    $("div.climbing").children("img").eq(1).css({
      display: "inline-block",
      left: 85,
      top: 130,
    });
  }
);

function moveclimbing() {
  $("div.climbing").children("img").eq(1).show();
  $("div.climbing").children("img").eq(1).removeClass("climbingAni");
  $("div.climbing").children("img").eq(1).css({
    left: 85,
    top: 130,
  });

  $("div.climbing")
    .children("img")
    .eq(1)
    .animate(
      {
        left: 110,
        top: 25,
      },
      1000,
      function () {
        $("div.climbing").children("img").eq(1).addClass("climbingAni");
        $("div.climbing").children("img").eq(1).fadeOut(500);
        $("div.climbing").children("img").eq(2).fadeIn(500);
        $("div.climbing").children("img").eq(2).delay(1000).fadeOut(500);
      }
    );
}

// 필라테스 애니메이션
let pilates;
$("div.pilates")
  .children("img")
  .hover(
    function () {
      $("div.pilates").children("img").first().addClass("pilatesAni");
    },
    function () {
      $("div.pilates").children("img").first().removeClass("pilatesAni");
    }
  );

// 자동 넘김 이미지 슬라이더
$("#eventPanel").prepend($("img.eventImg").eq(-1).clone());

let eventIndex = 1;
eventMoveSlider(eventIndex);
setInterval(function () {
  eventIndex++;
  if (eventIndex < 4) {
    eventMoveSlider(eventIndex);
  } else {
    $("#eventPanel").css("left", 0);
    eventIndex = 1;
    eventMoveSlider(eventIndex);
  }
}, 4000);

function eventMoveSlider(index) {
  $("#eventPanel").animate({
    left: -(index * 1200),
  });
}
