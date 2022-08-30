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
  var meta
  var boxt
  var boxh
  function pallarex() {
    boxt = $(".box1").offset().top
    boxh = $(".box1").innerHeight()
    meta = 100 /* 여기에서 100은 css와 무관한 박스의크기 */ + (scrt - (boxt - winh * 0.5 + boxh * 0.5)) * 0.1 /* 양수인지 음수인지 따라 방향,속도 */
    if (meta < 0) { meta = 0 }
    if (meta > 100) { meta = 100 }
    $(".box1").css({ "width": meta })
    /* ------------------------------------------------------ */
    boxt = $(".box2").offset().top
    boxh = $(".box2").innerHeight()
    meta = 1 + Math.abs((scrt - (boxt - winh * 0.5 + boxh * 0.5))) * - 0.002
    if (meta < 0) { meta = 0 }
    $(".box2 div").css({ "transform": "scale(" + meta + ")" })

    boxt = $(".box3").offset().top
    boxh = $(".box3").innerHeight()
    meta = 1 + Math.abs((scrt - (boxt - winh * 0.5 + boxh * 0.5))) * -0.003
    if (meta < 0) { meta = 0 }
    $(".box3 div").css({ "opacity": meta })

    boxt = $(".box4").offset().top
    boxh = $(".box4").innerHeight()
    meta = 50 + Math.abs((scrt - (boxt - winh * 0.5 + boxh * 0.5))) * -0.1
    if(meta<0){meta =0}
    $('.box4').css({"border-radius": meta + "%"})
    /* ---------------------------------------------- */
    $('.box5 li').each(function(){
      boxt = $(this).offset().top
      boxh = $(this).innerHeight()
      meta = 0 + (scrt -(boxt-winh*0.5 +boxh *0.5))*0.09
      $(this).children('img').css({"transform":"scale(1.3) translateY("+meta+"px)"})
    })
  }//fn 
  pallarex()
  $(window).resize(function () {
    pallarex()
  }).scroll(function () {
    pallarex()
  })
})