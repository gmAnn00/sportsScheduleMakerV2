// 비주얼 콘텐츠 영역
// $("#visualContents > img").delay(500).animate({
//   left: 200,
// });
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
