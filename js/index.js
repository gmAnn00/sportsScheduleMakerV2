let index;
$("div.imgBtns > button").click(function () {
  index = $(this).index();
  // console.log(index);
  moveSlider(index);

  $("div.imgBtns > button").removeClass("active");
  $("div.imgBtns > button").eq(index).addClass("active");
});
function moveSlider(index) {
  // console.log(index);
  $("div.bannerContainer").animate(
    {
      left: -(250 * index),
    },
    "fast"
  );
}
