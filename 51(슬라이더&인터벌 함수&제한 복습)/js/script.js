$(function () {
  var n = 1
  var isClick = true
  var timeoutID
  var IntervalID = setInterval(function () {
    n++
    change()

  }, 2000)







  function change() {

    if (n > 6) {//7번째 칸에서 간다면 


      n = 1
      $('.img-container').addClass('non-transition').css({ 'left': (n - 1) * -100 + "%" })// 트랜지션을 추가
      $('.img-container').css('left')
      $('.img-container').removeClass('non-transition')//트랜지션을 제거하고 1번째 칸으로 이동
      n = 2//2번으로 목적지 재설정


    }
    if (n < 0) {//7번째 칸에서 간다면 


      n = 1 //바꿔치기 위치
      $('.img-container').addClass('non-transition').css({ 'left': (n - 1) * -100 + "%" })// 트랜지션을 추가
      $('.img-container').css('left')
      $('.img-container').removeClass('non-transition')//트랜지션을 제거하고 1번째 칸으로 이동
      n = 4//4번으로 목적지 재설정

    }


    $(".img-container").css({ "left": (n - 1) * -100 + "%" })
    //브래드 크럼 bread crumb------------------------
    $('.controls button').removeClass('active')
    $('.btn' + n).addClass("active")

  }//fn change
   function autoplay(){
    n = $(this).attr('data-n')
    change()
    clearInterval(IntervalID)//자동재생 이 멈춤
    clearTimeout(timeoutID)
    timeoutID = setTimeout(function () {
      //자동재생을 한다
      IntervalID = setInterval(function () {
        n++
        change()

      }, 2000)
    }, 3000)//멈춘뒤로 5초 후에 할일
   }// auto play
  $(".next").click(function () {
    if (isClick === false) {
      return false
    }
    isClick = false
    setTimeout(function () { isClick = true }, 500)
    n++
    change()
    autoplay()
  })//next click
  $('.prev').click(function () {
    if (isClick === false) {
      return false
    }
    isClick = false
    setTimeout(function () { isClick = true }, 500)
    n--
    change()
    autoplay()
  })
  $('.controls button').click(function () {
    autoplay()
  })//click

})//ready