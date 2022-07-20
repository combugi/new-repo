$(function () {
  $('.ex1 .btn1').click(function () {
    $('.ex1 .btn2, .ex1 .btn3').removeClass('active')
    $('.ex1 .btn1').toggleClass('active')

    $('.ex1 .answer').stop().slideUp()
    $('.ex1 .answer1').stop().slideToggle()

  })//btn1 click
  $('.ex1 .btn2').click(function () {
    $('.ex1 .btn2, .ex1 .btn3').removeClass('active')
    $('.ex1 .btn2').toggleClass('active')



    $('.ex1 .answer').stop().slideUp()
    $('.ex1 .answer2').stop().slideToggle()

  })//btn2 click
  $('.ex1 .btn3').click(function () {
    $('.ex1 .btn1, .ex1 .btn2').removeClass('active')
    $('.ex1 .btn3').toggleClass('active')



    $('.ex1 .answer').stop().slideUp()
    $('.ex1 .answer3').stop().slideToggle()

  })//btn3 click
  /* ex1---------토글 클래스 일때는 전부 끄면 안되고 다른 요소들을 끈다 */

  $('.ex2 button').click(function () {
    var 상품종류 = $('.ex2 select').val()
    var 상품명 = $('.ex2 select option:selected').attr('data-상품명')
    var 상품갯수 = $('.ex2 .n').val()
    var 나이 = $('.ex2 .age').val()
    var 총상품가격 = 상품종류 * 상품갯수
    var result

    if (나이 < 19 && '  data- 상품명' === "술") {
      result = '구입 불가 상품입니당'
    } else {
      result = 총상품가격 + '입니다'
    }
    alert(result)
  })//click
  //미성년자(19세미만 이 술을 골랐을때 구입불가라는 결과를 알려주고 허용될시 총가격을 알려주자)
  /* ---------------2--------------------- */


  $(function () {
    $('.ex3 input').click(function (e) {

      var n = $(this).attr('data-n')
      alert(n)
    })
  })//click

  $('.ex4 button').click(function () {
    $('.ex4 button').css({ 'color': 'red' })
    $(this).css({ 'color': 'black' })

  })//click
  $('.ex5 button').click(function () {
    var color = $(this).attr('data-n')//data-n의 속성값의하나를 차례대로 색상을바꾼다
    $('.ex5 button').css({ 'color': 'black' })//버튼을 클릭할때 검은색으로 바뀐다
    $(this).css({ 'color': color })


  })/* 파랑버튼을 선택했을때 파랑으로 바뀌어지면서 다른 나머지는 원래대로 돌아간다,
  단 3개 중복은 안되면서 3개의 색상이 다 내장 된상태에서 다른 건 원래대로...  */
  $('.ex6 button').click(function () {
    var n = $(this).attr('data-n')
    $('.ex6 .box').hide()
    $('.ex6 .box' + n).show()
  })//click


  $('.ex7 .btn1').click(function () {
    var background = $(this).attr('data-n')/*  button 이란 태그안의 data-n 이라는 부가속성을 주고 this를 통해 값을 각각 뽑아왔다 */
    $('.ex7 .box').css({'background':'grey'})//버튼을 누르지않고 박스가 비활성화시 회색

    $('.ex7 .box').css({'background':background})//각각의 박스 색상 부여하기,버튼을 눌렀을때만 켜지고 꺼지기
    $('.ex7 .box box1').toggleClass('active')
    $('.ex7 .box box2,.ex7 .box box3').removeClass('active')

 


    alert(background)



    /* 버튼마다 */


  })
})//ready




