$(function () {
  function scrollMotion() {
    //스크롤 거리가 400이되었을때 라면 addClass한다.
    var scrt = $(window).scrollTop()//문서와 브라우저 간의 높이 
    var box1_top = $('.box1').offset().top   //offset()이란? scrolltop,left의 모르는 길이를 포함한 구하고자 하는 전체 길이
    var winh = $(window).height() //브라우저 간의 높이
    var box1h = $('.box1').innerHeight() //박스의 안 높이

    if (
      scrt >= box1_top - winh * 0.3 + box1h
      &&
      scrt <= box1_top - winh * 0.1
    ) {
      $('.box1').addClass('active')
    } else if (
      scrt >= box1_top - winh * 0.9 + box1h
      &&
      scrt <= box1_top - winh * 0.7
    ) {
      $('.box1').addClass('active2')
    } else {
      $('.box1').removeClass('active active2')
    }




  }//fn scroll motion

  scrollMotion()

  $(window).scroll(function () {
    scrollMotion()
  })
  $(window).resize(function () {
    scrollMotion()
  })



  /* 스크롤 탑이 오프셋 탑 길이보다 길때 색상이 바뀌어진다
     */
})//ready