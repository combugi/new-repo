$(function () {
  function motion() {
    /*  scroll:0-1
     offset-distance: 0%-100% */
    var scrollStart = $(".section2").offset().top
    var scrollEnd = $(".section3").offset().top - winh
    var scrollRange = scrollEnd - scrollStart
    var scrollRatio =(scrt-scrollStart)/scrollRange// 스크롤 비율 0 ~1
    if (scrollRatio <0) {
      scrollRatio=0
    }
    if (scrollRatio >1) {
      scrollRatio=1
    }
    $(".pen").css({"offset-distance":scrollRatio*100+"%"})
    $(".svg2 .pen").css({"stroke-dashoffset":1-scrollRatio})
  }//fn
  motion()
  $(window).resize(function () {
    motion()
  }).scroll(function () {
    motion()
  })

})//ready