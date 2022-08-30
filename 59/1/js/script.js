$(function () {
  var n
  var delta //마우스 휠을 감지할 변수
  function sectionChange() {
    $('.section' + n).addClass("active").removeClass("active-prev")
    $('.section' + n).prevAll("section").addClass("active active-prev")
    $('.section' + n).nextAll("section").removeClass("active")
  }
  $(".section1").addClass("active")

  $(".scrollspy button").click(function () {
    n = $(this).attr("data-n")
    sectionChange()

  })
  $("section").bind("mousewheel", function (e) {
    delta = e.originalEvent.wheelDelta / -125
    n = parseInt($(this).attr("data-n")) + delta
    if (n < 1) { n = 1 }
    if (n > 3) { n = 3 }
    sectionChange()
  })
})