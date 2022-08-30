$(function () {
  function stickymotion() {
    var scrStart = $(".scr-start").offset().top/* $("img-container").offset().top  포지션이 fixed, sticky 객체로 시작이나 끝점을 설정하지 말것*/
    var scrEnd = $(".scr-end").offset().top - $('.img-container').innerHeight()
    var scrRange = scrEnd - scrStart
    var scrRatio = (scrt - scrStart) / scrRange
    if (scrRatio < 0) { scrRatio = 0 }
    if (scrRatio > 1) { scrRatio = 1 }
    var NumberStart = 1
    var NumberEnd = 36
    var NumberRange = NumberEnd - NumberStart
    var imgNumber = parseInt((NumberRange * scrRatio) + NumberStart)
    $(".img-container img").hide()
    $(".img-container img:nth-child(" + imgNumber + ")").show()

  }//fn_
  stickymotion()
  $(window).resize(function () {
    stickymotion()
  }).scroll(function () {
    stickymotion()
  })//window evt

})//ready