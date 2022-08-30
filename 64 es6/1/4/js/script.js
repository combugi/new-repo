$(function () {
  var 글자 = $('.ex1 .result').text().trim()//글자를 가져온다
  var 글자길이 = 글자.length
  $('.ex1 .result').empty()//글자들 지우기
  $(".ex1 button").click(function () {

    $('.ex1 .result').empty()//글자들 지우기
    /* alert(글자.charAt(0))  *///시작순서는 0번째부터
    for (var i = 0; i <= 글자길이 - 1; i++) {
      if (글자.charAt(i) === ' ') {
        $(".ex1 .result").append(
          `<span>&nbsp;</span>`
        )
      } else if (글자.charAt(i) === ' ` ') {
        $(".ex1 .result").append('<br>')

      } else {
        $(".ex1 .result").append(
          `<span>${글자.charAt(i)}</span>`
        )
      }
      $(".ex1 .result span:last-child").css({ "transition-delay": i * 0.1 + "s" })
    }//for
    setTimeout(function () {
      $(".ex1 .result span").addClass("active")
    }, 10)
  })
  console.log(글자);




  /* ------------------ */

  var typing1 = new Type_effect("#type1", 100)
  $(".ex2 .btn1").click(function () {
    typing1.play()
  })
  $(".ex2 .btn2").click(function () {
    typing1.reverse()
  })
  $(".ex2 .btn3").click(function () {
    typing1.toggle()
  })
  function motion() {

  }//motion
  var t
  var h
  motion()
  t = $("#type1").offset().top
  h = $("#type1").innerHeight

  if(scrt<winh*0.5+winh*0.5 ){

  }
  
  $(window).scroll(function () {
    motion()
  }).resize(function () {
    motion()
  })


  var str=$(".ex3 .result").text().trim()
  $(".ex3 .result").empty()
  for(var i=0; i<=str.length -1; i++){
    if(str.charAt(i)===` `){
      $(".ex3 .result").append(`<span>&nbsp;</span>`)
    }else{
      $(".ex3 .result").append(`<span>${str.charAt(i)}</span> `)
    }
    $(".ex3 .result span:last-child").css({'transition-delay':`${i*0.2}s`})
  }//for
  $(".ex3 button").click(function(){
    $(".ex3 .result span").addClass("active")
  })








})//ready