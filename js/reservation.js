// https://myhappyman.tistory.com/145
(function () {
  calendarMaker($("#calendarContents"), new Date());
})();

let nowDate = new Date();

function calendarMaker(target, date) {
  if (date == null || date == undefined) {
    date = new Date();
  }
  let nowDate = date;
  if ($(target).length > 0) {
    let year = nowDate.getFullYear();
    let month = nowDate.getMonth() + 1;
    $(target).empty().append(assembly(year, month));
  } else {
    console.error("calendar Target is empty");
    return;
  }

  let thisMonth = new Date(nowDate.getFullYear(), nowDate.getMonth(), 1);
  let thisLastDay = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 0);

  let tag = "<tr>";
  let cnt = 0;

  // 빈 공백 만들어주기
  for (let i = 0; i < thisMonth.getDay(); i++) {
    tag += "<td></td>";
    cnt++;
  }

  // 날짜 채우기
  for (let i = 1; i <= thisLastDay.getDate(); i++) {
    if (cnt % 7 == 0) {
      tag += "<tr>";
    }
    tag += "<td>" + i + "</td>";
    cnt++;
    if (cnt % 7 == 0) {
      tag += "</tr>";
    }
  }

  $(target).find("#setDate").append(tag);
  calMoveEvtFn();

  function assembly(year, month) {
    /*
      let calendarHTMLCode =
        "<table class='calendarTable'>" +
        "<thead class='calDate'>" +
        "<th><button type='button' class='prev'>< 이전 달</button></th>" +
        "<th colspan='5'><p><span>" +
        year +
        "</span>년 <span>" +
        month +
        "</span>월</p></th>" +
        "<th><button type='button' class='next'>다음 달 ></button></th>" +
        "</thead>" +
        "<thead  class='calWeek'>" +
        "<th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th>" +
        "</thead>" +
        "<tbody id='setDate'>" +
        "</tbody>" +
        "</table>";
        */
    /*
      let calendarHTMLCode =
        "<table class='calendarTable'>" +
        "<thead class='calDate'>" +
        "<th><button type='button' class='prev'>< 이전 달</button></th>" +
        "<th colspan='5'><p><span>" +
        year +
        "</span>년 <span>" +
        month +
        "</span>월</p></th>" +
        "<th><button type='button' class='today'>오늘</button>" +
        "<th><button type='button' class='next'>다음 달 ></button></th>" +
        "</thead>" +
        "<thead  class='calWeek'>" +
        "<th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th>" +
        "</thead>" +
        "<tbody id='setDate'>" +
        "</tbody>" +
        "</table>";
        */
    let calendarHTMLCode =
      "<table class='calendarTable'>" +
      "<caption class='calDate'>" +
      "<button type='button' class='prev'>< 이전 달</button>" +
      "<span>" +
      year +
      "년 " +
      month +
      "월</span>" +
      "<button type='button' class='today'>오늘</button>" +
      "<button type='button' class='next'>다음 달 ></button>" +
      "</caption>" +
      "<thead  class='calWeek'>" +
      "<th class='red'>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th class='blue'>토</th>" +
      "</thead>" +
      "<tbody id='setDate'>" +
      "</tbody>" +
      "</table>";
    return calendarHTMLCode;
  }

  function calMoveEvtFn() {
    // 이전 달 클릭
    $(".calendarTable").on("click", ".prev", function () {
      nowDate = new Date(
        nowDate.getFullYear(),
        nowDate.getMonth() - 1,
        nowDate.getDate()
      );
      calendarMaker($(target), nowDate);
    });

    // 다음달 클릭
    $(".calendarTable").on("click", ".next", function () {
      nowDate = new Date(
        nowDate.getFullYear(),
        nowDate.getMonth() + 1,
        nowDate.getDate()
      );
      calendarMaker($(target), nowDate);
    });

    //일자 선택 클릭
    $(".calendarTable").on("click", "td", function () {
      $("td.selectDay").removeClass("selectDay");
      $(this).removeClass("selectDay").addClass("selectDay");
    });

    // 오늘 클릭
    $(".calendarTable").on("click", ".today", function () {
      nowDate = new Date();
      calendarMaker($(target), nowDate);
      // $("td:contains('" + nowDate.getDate() + "')")
      //   .removeClass("selectDay")
      //   .addClass("selectDay");
      $("td")
        .filter(function () {
          return $(this).text() == nowDate.getDate();
        })
        .removeClass("selectDay")
        .addClass("selectDay");
    });

    // 빈칸 선택 안함
    $("td")
      .filter(function () {
        return $(this).text() !== "";
      })
      .addClass("hasDay");

    // 토요일들 파란색 줌
    $("td")
      .filter(function () {
        return $(this).index("td") % 7 == 6;
      })
      .addClass("blue");

    // 일요일들 빨간색 줌
    $("td")
      .filter(function () {
        return $(this).index("td") % 7 == 0;
      })
      .addClass("red");
  }
}
