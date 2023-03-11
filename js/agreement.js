let agreements = {
  terms: false,
  age: false,
  privacy: false,
  marketing: false,
};

$("#agreementContainer .checkboxAll").on("click", function () {
  let checked = $(this).is(":checked");
  if (checked) {
    $("#agreementContainer p input").prop("checked", true);
    $("#btnAgreement").css("display", "inline-block");
  } else {
    $("#agreementContainer p input").prop("checked", false);
    $("#btnAgreement").css("display", "none");
  }
});

$("#agreementContainer .normal").on("click", function () {
  let checked = $(this).is(":checked");

  if (!checked) {
    $("#agreementContainer .checkboxAll").prop("checked", false);
  }
});

$("#agreementContainer .normal").on("click", function () {
  let is_checked = true;
  $("#agreementContainer .normal").each(function () {
    is_checked = is_checked && $(this).is(":checked");
  });
  $("#agreementContainer .checkboxAll").prop("checked", is_checked);
});

$("#agreementContainer .checkboxNess").on("click", function () {
  let is_checked = true;
  $("#agreementContainer .checkboxNess").each(function () {
    is_checked = is_checked && $(this).is(":checked");
    // console.log("1");
  });
  if (is_checked) {
    $("#btnAgreement").css("display", "inline-block");
    // console.log("2");
  } else {
    $("#btnAgreement").css("display", "none");
    // console.log("3");
  }
});

$("#btnAgreement").on("click", function () {
  console.log("hi");
  location.href = "join.html";
});
