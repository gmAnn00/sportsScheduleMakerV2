// 비주얼 콘텐츠 영역 p태그
$("#visualContents > p").first().slideDown("slow");
$("#visualContents > p").last().delay(500).slideDown("slow");

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
