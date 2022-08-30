/* 1.scroll active (조건문 이용),parallax(공식) 
2. 다른 레이아웃에 영향을끼치는 (width나 height 등등) 속성은 적용하지 말것 
3.공식적용 후 조건문으로 변화량을 제어해야 할 경우가 있다.
4.offset이 변하는 객체를 스크롤 공식에 적용하면 안됨(크기,수직위치가 변하는 객체는 스크롤 공식에 적용하지 말것)
5.값에 민감한 속성은 속도를 미세하게 설정 (scale,opacity) 2px 2배
6. Math.abs는 절대값을 주는 속성
7. 반대칭 모션을 parallax에 적용할 경우Math.abs()와 속도를 음수로 변경
8.그리드 구조에 parallax효과를 적용할 경우는 each문을 사용
9.*/


$(function () {
  var metascale
  var metaY
  var boxt
  var boxh
  function parallax() {
    $(".container li").each(function () {
      boxt = $(this).offset().top
      boxh = $(this).innerHeight()
      metascale = 1 + Math.abs(scrt - (boxt - winh * 0.5 + boxh * 0.5)) * -0.002

      if (metascale < 0) {
        metascale = 0
      }
      $(this).children('a').css({ "transform": "scale(" + metascale + ")" })
      metaY = 0 + (scrt - (boxt - winh * 0.5 + box * 0.5)) * 0.03
      /* $(this).children("a").children("figure").children('img') */
      $(this).find('img').css({ "transform": "translateY(" + metaY + "px) scale(1.5)" })
      if (scrt >= box - winh * 0.8) {
        $(this).addClass('active')
      } else {
        $(this).removeClass('active')
      }
    })
    parallax()
    $(window).resize(function () {
      parallax()
    }).scroll(function () {
      parallax()
    })
  }
})