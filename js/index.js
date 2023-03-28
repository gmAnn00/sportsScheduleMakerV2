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
  $("div.visualImg")
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
let boxingPlaying = false;
$("div.boxing").hover(
  function () {
    boxingPlaying = true;
    moveboxing($("div.boxing"));
    boxing = setTimeout(function moveboxingRecursion() {
      if (!boxingPlaying) {
        return;
      }
      moveboxing($("div.boxing"));
      setTimeout(moveboxingRecursion, 3300);
    }, 3300);
  },
  function () {
    clearTimeout(boxing);
    boxingPlaying = false;
    $(this).children("img").last().css({
      left: 100,
      top: 20,
    });
  }
);

function moveboxing(obj) {
  let target = obj.children("img").last();
  target.animate(
    {
      left: 80,
      top: 10,
    },
    1000,
    "easeOutElastic"
  );
  target.animate(
    {
      left: 100,
      top: 20,
    },
    500
  );
  target.animate(
    {
      left: 120,
      top: 10,
    },
    1000,
    "easeOutElastic"
  );
  target.animate(
    {
      left: 100,
      top: 20,
    },
    500
  );
}

// 수영 애니메이션
let swimming;
let swimmingPlaying = false;
$("div.swimming").hover(
  function () {
    swimmingPlaying = true;
    moveswimming($("div.swimming"));
    swimming = setTimeout(function moveswimmingRecursion() {
      if (!swimmingPlaying) {
        return;
      }
      moveswimming($("div.swimming"));
      setTimeout(moveswimmingRecursion, 1400);
    }, 1400);
  },
  function () {
    clearTimeout(swimming);
    swimmingPlaying = false;
    let target = $("div.swimming").children("img").last();
    target.removeClass("swimmingAni");
    target.css({
      left: 70,
      top: 115,
    });
  }
);
function moveswimming(obj) {
  let target = obj.children("img").last();
  target.animate(
    {
      left: 140,
      top: 100,
    },
    "slow",
    function () {
      target.addClass("swimmingAni");
    }
  );

  target.animate(
    {
      left: 70,
      top: 115,
    },
    "slow",
    function () {
      target.removeClass("swimmingAni");
    }
  );
}

// 클라이밍 애니메이션
let climbing;
let climbingPlaying = false;
$("div.climbing").hover(
  function () {
    climbingPlaying = true;
    moveclimbing($("div.climbing"));
    climbing = setTimeout(function moveclimbingRecursion() {
      if (!climbingPlaying) {
        return;
      }
      moveclimbing($("div.climbing"));
      setTimeout(moveclimbingRecursion, 3000);
    }, 3000);
  },
  function () {
    climbingPlaying = false;
    clearTimeout(climbing);
    let target = $("div.climbing").children("img").eq(1);
    target.css({
      display: "inline-block",
      left: 85,
      top: 130,
    });
    target.show();
  }
);

function moveclimbing(obj) {
  let targetclimbing = obj.children("img").eq(1);
  let targetend = obj.children("img").eq(2);
  targetclimbing.show();
  targetclimbing.css({
    left: 85,
    top: 130,
  });

  targetclimbing.animate(
    {
      left: 110,
      top: 25,
    },
    1000,
    function () {
      targetclimbing.fadeOut(200);
      targetend.fadeIn(500);
      targetend.delay(1000).fadeOut(500);
      // targetclimbing.css({
      //   left: 85,
      //   top: 130,
      // });
      // targetclimbing.delay(2000).show();
    }
  );
}

// 필라테스 애니메이션
let pilates;
$("div.pilates").hover(
  function () {
    $(this).children("img").first().addClass("pilatesAni");
  },
  function () {
    $(this).children("img").first().removeClass("pilatesAni");
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
