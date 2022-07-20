$(function () {
  var n = 0
  var isClick = true

  var intervalid = setInterval(function () {
    change("next")
    autoplay()
  }, 1000)

  function change(type, btN) {
    //클릭타이머


    if (type === "next") {
      n++
      if (n > 5) { n = 1 }
    }
    if (type === "decrease") {
      n--
      if (n < 1) { n = 5 }
    }
    if (type === "button") {
      n = btN
    }

    //이미지 전체 숨기고 n번째 이미지 보여주기 
    $('.img-container li').stop().fadeOut()
    $('.imgbox' + n).stop().fadeIn()
    //버튼  활성 비활성화
    $('.controls button').removeClass('active')
    $('.btn' + n).addClass('active')

  }//fn_change
  function autoplay(next)
  clearTimeout(intervalid)//자동재생 멈춤
  clearTimeout(timeoutid)//예약전에 취소 먼저
  timeoutid = setTimeout(function () {
    setTimeout(function () {
    intervalid = setInterval(function () {
      change("next")
    }, 1000)
  }, 10000)//멈춘뒤로 10초후에는 다시 자동재생을 반복한다

  })//자동재생 반복
  
  
  $(".next").click(function () {
    if (isClick === false) {
      return false

    }
    isClick = false

    setTimeout(function () {
      
    }, 500) // 연타 타이머 설정
    //이미지 번호 증감과 검사
    change("increase")
    autoplay('next')
  })//click

  $(".prev").click(function () {
    if (isClick === false) {
      return false

    }
    isClick = false
    setTimeout(function () {
      isClick = true
    }, 500) // 연타 타이머 설정
    //이미지 번호 증감과 검사
    change("decrease")
    clearTimeout(intervalid)

  })//click

  $(".controls button").click(function () {
    //이미지 번호 증감과 검사

    change("button", $(this).attr('data-n'))
    clearTimeout(intervalid)
  })//click
})//ready