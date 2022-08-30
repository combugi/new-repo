$(function () {
  $(".ex1 button").click(function () {
    $('.ex1 .box').each(function () {
      var bg = $(this).attr("data-bg")
      $(this).css({ "background": bg })
      var boxName = $(this).html()
      console.log(boxName);
      /* 각자 차례대로 한번씩 바꿔주며 css명령어를 통해 색상을 달리해준다*/
    })//each
  })//click

  $(".ex2 button").click(function () {

    $(this).siblings(".box").each(function () { //클릭한 버튼의 형제 .box가 할일
      var bg = $(this).attr("data-bg")//순번에 해당하는 .boxx의 색깔을 가져온다.
      $(this).css({ "background": bg })//순버에 해당하는 .box의 색을 변경한다.




    })
  })
  $(".ex3 button").click(function () {//문제갯수만큼 순서대로($(this)siblings("select").each(function(){ 변수= $(this).children(option1or2).val()}).) 할일 차례에해당하는 문제의 select값이 정답과 같다라면 점수를 1씩 증가한다.그리고 점수를 출력한다.
    var n = 0
    n++
    $(this).siblings("select").each(function(){
      var op1= $(this).children(option).val()
      var op2= $(this).children(option).val()
    })

    $(this).each(function () {
      if (n = "정답") {
        n + 1
      } else {
        n = "오답"
      }
    })
    alert(n)

  })





















  $(".ex4 button").click(function () {
    var num1 = parseInt($(this).siblings(".num1").val())
    var num2 = parseInt($(this).siblings(".num2").val())
    result = num1 + num2
    alert(result)



  })
  $(".ex5 button").click(function () {
    $(".ex5 div").each(function () {
      var num1 = parseInt($(this).children(".num1").val())
      var num2 = parseInt($(this).children(".num2").val())
      var num3 = parseInt($(this).children(".num3").val())
      if (num3 === num1 + num2) {
        console.log("정답");
      } else {
        console.log("오답");
      }
    })
  })

















  $(".ex6 button").click(function () {
    $(this).siblings("div").each(function() {
      var num1 = parseInt($(this).children(".num1").val())
      var num2 = parseInt($(this).children(".num2").val())
      var num3 = parseInt($(this).children(".num3").val())

      if (num3 === num1+num2) {
        console.log("정답");
      } else {
        console.log("오답");
      }
    })
  })

})//ready


/* 버튼은 2개이나 간섭없이 1줄에 3칸씩 입력을 순서대로 하공   */