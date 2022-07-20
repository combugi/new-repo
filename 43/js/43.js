$(function () {
  var n1 = 0
  $('.ex1  .btn1').click(function () {
    n1++ //n*=2//n=n+1//n--
    $('.ex1 .output').text(n1)
  })//click
  $('.ex1  .btn2').click(function () {
    n1-- //n*=2//n=n+1//n--
    $('.ex1 .output').text(n1)
  })//click



  /* ex2 */
  var n2 = 1 //증감 초기 변수값을 장외로 꺼내서 쓴다
  $('.ex2 .btn1').click(function () {
    n2++//증감
    if (n2 > 5) { //검사
      n2 = 5
    }
    $('.ex2 .output').text(n2)

  })
  $('.ex2 .btn2').click(function () {
    n2-- //증감
    if (n2 < 1) { //검사
      n2 = 1
    }
    $('.ex2 .output').text(n2)

  })


  var n3 = 1
  $('.ex3 .btn1').click(function () {
    n3++//증감
    if (n3 > 5) { //검사
      n3 = 1
    }
    $('.ex3 .output').text(n3)

  })

  var n3_1 = 5
  $('.ex3 .btn2').click(function () {
    n3_1-- //증감
    if (n2 < 1) { //검사
      n3_1 = 5
    }
    $('.ex3 .output').text(n3_1)

  })

  var n4 = 0
  $('.ex4 button').click(function () {
    var a = parseInt($(this).attr('data-n'))//<-data-n대신 text를 넣을시 열고 닫는 태그 기준으로 값을 가져온다
    n4 += a
    $('.ex4 .output').text(n4)


  })

  var n5 = 1

  $('.ex5 button').click(function () {
    n5 += parseInt($(this).attr('data-increase'))//1씩증가하는 속성값을 빼내옴



    if (n5 > 5) { n5 = 1 }
    if (n5 < 1) { n5 = 5 }
    $('.ex5 .output').text(n5)

  })
  /* ex6 */
  var n6 = 0
  var 아무이름
  $('.ex6 button').click(function () {
    clearTimeout(아무이름)
    아무이름 = setTimeout(function () { //아무이름은  붙어주고 자 하는 이름..변수가 아닌 인자랑 비슷한 개념
      n6++
      $('.ex6 .output').text(n6)


    }, 3000)//2초후에 할 일
  })//click
  var n7 = 0
  var 아뭐이름
  $('.ex7 .btn1').click(function () {
    clearInterval(아뭐이름)

    아뭐이름 = setInterval(function () {
      n7++
      $('.ex7 .output').text(n7)
    }, 1000)//interval
  })//click

  $('.ex7 .btn2').click(function () {
    clearInterval(아뭐이름)

    아뭐이름 = setInterval(function () {
      n7--
      $('.ex7 .output').text(n7)
    }, 1000)//interval
  })//click
  var n8 = 0
  var 아뭥이름
  $('.ex8 .btn1').click(function () {
    clearTimeout(아뭥이름)

    아뭥이름 = setTimeout(function () {
      n8++

      clearInterval(아뭥이름)
      아뭥이름 = setInterval(function () {
        n8++
        $('.ex8  .output').text(n8)
      }, 1000)//c,s:interval

    }, 5000)//clear,set.Time
  })//click



  var n9 = 0
 /*  var result= "0" */
  var increase= 0
 var 멈춰=0
  멈춰= setInterval(function () {
    increase++
    n9 += increase
    if(n9>=28){
      clearInterval(멈춰)
    } /* n9 =0 increase=0 1 1 2 2  */
    /* result+=(","+n9) */
    result=$('.ex9 .output').text()+""+n9
    $('.ex9 .output').text(result)
  }, 1000)
  
})//ready