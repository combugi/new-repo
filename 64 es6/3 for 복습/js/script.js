$(".ex1 button").click(function () {
  for (var i = 1; i <= 9; i += 2) {
    $(".ex1 .result").append(`${i}<br>`)
  }

  /* ---------------------------------------------------- */
  var ex2sum = 0
  $('.ex2 button').click(function () {
    /* sum += 1
    sum += 2
    sum += 3
    sum += 4
    sum += 5
    sum += 6
    sum += 7
    sum += 8
    sum += 9
    sum += 10  */ //55
    for (var i = 1; i <= 10; i++) {
      ex2sum += i
      $(".ex2 .result").append(ex2sum)
    }
  })
  /* -------------------------------- */
  var ex2sum = 0
  $('.ex3 button').click(function () {
    var num1 = parseInt($(".ex3 .num1").val())
    var num2 = parseInt($(".ex3 .num2").val())
    if (num1 <= num2) {//1~10
      for (var i = num1; i <= num2; i++) {
        ex2sum += i
      }
    } else {//10 ~ 1 10 9
      for (var i = num1; i >= num2; i--) {
        ex2sum += i
      }
    }
    $(".ex3 .result").text(ex2sum)
  })




  /* ---------------------------------------------------------------------- */


  $(".ex4 button").click(function () {
    var start = parseInt($(".ex4 .start").val())
    var end = parseInt($(".ex4 .end").val())
    if (start <= end) {


      for (var i = start; i <= start; i++) {//2~9

        for (var j = end; j <= end; j++) {//1~9


        }

      }
    } else {
      for (var i = start; i >= start; i--) {//9~2

        for (var j = end; j >= end; j--) {//9~1


        }

      }
    }
    $(".ex4 .result").append(`${i * j}<br>`)
  })
  $(".ex5 button").click(function () {
    for (var i = 1; i <= 5; i++) {
      for (var s = 1; s >= i - 4; s--) {
        $(".ex5 .result").append(`&nbsp;`)

      } for (var j = 1; j <= i; j++) {
        $(".ex5 .result").append(j)
      }

      $(".ex5 .result").append(`<br>`)
    }
  })
  $(".ex5-1 button").click(function () {
     var leng[]
    for (var i = 1; i <= 5; i++) {
      for (var s=1; s>= i-4; s--) {
        $(".ex5-1 .result").append("&nbsp;")
      }
      for(var j=5; j<=j+i; j++){
        $(".ex5-1 .result").array(chg)
        $(".ex5-1 .result").append(j)
      }
      $(".ex5-1 .result").append(`<br>`)

    }
  })
})//click