$(function () { //this는 콜백함수 형식안에서만 사용가능
  /* $(this).attr('value') */ /* 심어놓은 값 가져오기 */
  /*  상자를 다숨긴다*/
  /* 모든값을 차례대로 보여주기 */
  /* ex1---------------------------------------------------------- */
  function ex1an2(el, exnum) {
    var n = el.val()
    $('.ex1' + exnum + ' div').hide()
    $('.ex1 ' + exnum + '  .box' + n).show()
  }//fn
  $('.ex1 input,.ex2 input').click(function () {
    ex1an2($(this), $(this).attr('data-exnumber'))
  })//click
  /* ex3,4------------------------------------------------ */
  function fn3_4(el, ex) {
    var n = el.attr('data-n')
    var c = el.attr('data-c')
    $('.ex' + ex + ' div').css({ 'background': 'none' })
    $('.ex' + ex + '  .box' + n).css({ 'background': c })
  }//fn3_4

  $('.ex3 button,.ex4 button').click(function () {
    fn3_4($(this), $(this).attr('data-ex'))
  })//click
  /* ---------5-------------- */
  function fn5_6(el, ex) {
    var n = el.attr('data-n')
    $('.ex5 ' + ex + 'div:not(.box' + n + ')').removeClass('active')
    $('.ex5 ' + ex + ' .box' + n).toggleClass('active')//toggle class,toggle
  }
  $('.ex5 button,.ex6 button').click(function () {
    fn5_6
  })


  function el(e, ex) {
    var n = e.val()
    $('.ex' + ex + ' .box' + n).toggle()
    $('.ex' + ex + ' div:not(.box' + n + ')').hide()
    console.log$('.ex' + ex + ' div:not(.box' + n + ')');
  }//fn

  $('.ex7  input').click(function () {/* 버튼 벨류값... */
    //1.2.3의값을 가져옴

    el($(this),$(this).attr('data-exNumber') )


  })//click

})//ready
/* val값은 박스에 적용 데이터 값은 ex2 */