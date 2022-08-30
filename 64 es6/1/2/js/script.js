$(".ex1 button").click(function () {
  var EvenOrOdd
  for (i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      EvenOrOdd = 'even'
    } else {
      EvenOrOdd = 'odd'
    }




  }
})
$(".ex2 button").click(function () {
  for (var i = 2; i <= 9; i++) {
    for (var j = 1; j <= 9; j++) {
      $(".ex2 .result").append(` <br>
       ${i} * ${j} = ${i * j}`)
    }
    $(".ex2 .result").append(`
  <br>----------------<br>
  `)
  }
})//click

$(".ex3 button").click(function () {
  var 단 = $('.ex3 input').val()
  $(".ex3 .result").empty()
  for (i = 1; i <= 9; i++) {
    $(".ex3 .result").append(`
    ${단}*${i}=${단 * i}
    <br>
    `)
  }

})
$(".ex4 button").click(function () {
  var 시작단 = parseInt($('.ex4 .시작').val())
  var 끝단 = parseInt($('.ex4 .끝').val())
  $(".ex4 .result").empty()
  for (var i = 시작단; i <= 끝단; i++) {
    for (var j = 1; j <= 9; j++) {
      $(".ex4 .result").append(` <br>
       ${i} * ${j} = ${i * j}`)
    }
    $(".ex4 .result").append(`
    <br>----------------<br>
  `)
  }
})
/* 2*n ~ 3*n 18*/
/* 
2  x 1 = 2
2  x 2 = 4
2  x 3 = 2
2  x 4 = 2
2  x 5 = 2
2  x 6 = 2

4  x 1
4  x 2
4  x 3
4  x 4
4  x 5  
4  x 6
*/

/* 시작단2 곱 *for구문 =${시작단 * i}
     끝단 곱 *for구문 =${끝단 * i}   
     단,empty,remove는 밸류값을 받아올때만 속성 작동...*/