$(function () {
  var scrt
  var scrl
  var winh
  var winw

  function fn() {
    scrt = $(window).scrollTop()
    scrl = $(window).scrollLeft()
    winh = $(window).height()
    winw = $(window).width()
    /* lt=default */
    $('.cc').css({ 'top': scrt + winh * 0.5, 'left': scrl + winw * 0.5 }) /* top,left (scrt) 로 만 사용*/
    $('.lt').css({ 'top': scrt + winh * 0, 'left': scrl + winw * 0  })
    $('.rt').css({ 'top': scrt + winh * 0, 'left': scrl + winw * 1  })
    $('.ct').css({ 'top': scrt + winh * 0, 'left': scrl + winw * 0.5  })
    $('.lc').css({ 'top': scrt + winh * 0.5, 'left': scrl + winw * 0  })
    $('.rc').css({ 'top': scrt + winh * 0.5, 'left': scrl + winw * 1  })
    $('.lb').css({ 'top': scrt + winh * 1, 'left': scrl + winw * 0  })
    $('.cb').css({ 'top': scrt + winh * 1, 'left': scrl + winw * 0.5  })
    $('.rb').css({ 'top': scrt + winh * 1, 'left': scrl + winw * 1  })
    
  }//fn


  fn()
  $(window).scroll(function () {
    //px단위 
    fn()
  })
  $(window).resize(function () {
    fn()
  })
})//ready