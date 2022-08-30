$(function () {
  var delta
  /*   window.addEventListener('mousewheel', function (e) {
      e.preventDefault()
    },{passive:false})  전체를 적용하려면 오리지날 문법;엘리먼트,요소등등 각각적용시키려면 제이쿼리 문법*/
  var n
  $('section').bind('mousewheel', function (e) {
    e.preventDefault()
    delta = e.originalEvent.wheelDelta / -120

    n = parseInt($(this).attr("data-n"))

    if (delta === 1) {//휠을 아래로 굴리면
      n++ //3번섹션
    } else {//휠을 위로 굴리면
      n-- //1번섹션
    }
    if(n<1){n=1}
    if(n>5){n=5}
    window.scrollTo({
      top: $('.section'+n).offset().top,
      behavior: "smooth" ,
    })
  })
})//ready