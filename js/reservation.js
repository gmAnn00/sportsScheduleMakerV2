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
      passedDay(nowDate);
    });

    // 다음달 클릭
    $(".calendarTable").on("click", ".next", function () {
      nowDate = new Date(
        nowDate.getFullYear(),
        nowDate.getMonth() + 1,
        nowDate.getDate()
      );
      calendarMaker($(target), nowDate);
      passedDay(nowDate);
    });

    //일자 선택 클릭
    $(".calendarTable").on("click", "td", function () {
      let cName = $(this).attr("class");
      // console.log(cName);
      let canSelect = cName.indexOf("passedDay");
      if (canSelect == -1) {
        $("td.selectDay").removeClass("selectDay");
        $(this).removeClass("selectDay").addClass("selectDay");
      }
    });

    // 오늘 클릭
    $(".calendarTable").on("click", ".today", function () {
      nowDate = new Date();
      calendarMaker($(target), nowDate);
      passedDay(nowDate);
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

  $("#btnReserveArea > button").click(function () {
    reserve();
  });

  function reserve() {
    let reserveList = [];
    let sports = $("#sports option:selected").val();
    let time = $("#reservationContents input[name=reserveTime]:checked").val();
    let date = $("td.selectDay").text();
    // console.log(sports, time, date);
    if (time == undefined || date == undefined) {
      alert("예약 날짜/시간을 선택해 주세요.");
    } else {
      let newReserve = {
        sports: sports,
        date: date,
        time: time,
      };
      let recordStr =
        newReserve.sports +
        "<br/><span>날짜: " +
        newReserve.date +
        "</span><br/><span>시간: " +
        newReserve.time +
        "시</span>";
      reserveList.push(newReserve);
      console.log(reserveList);
      $("div.reservedRecord").append(recordStr);
      $("td.selectDay").append("<div class='displayReserve'></div>");
    }
  }

  // 오늘 이전은 선택/호버 안되게 함
  function passedDay(date) {
    let today = new Date();
    if (date.getMonth() == today.getMonth()) {
      $("td")
        .filter(function () {
          return parseInt($(this).text()) < parseInt(today.getDate());
        })
        .addClass("passedDay");
    } else if (date < today) {
      $("td").addClass("passedDay");
    }
  }

  passedDay(nowDate);
}
