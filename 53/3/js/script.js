$(function () {


  function scrollspy() {
    var scrt = $(window).scrollTop()

    var offset1 = $('.section1').offset().top
    var offset2 = $('.section2').offset().top
    var offset3 = $('.section3').offset().top
    var offset4 = $('.section4').offset().top
    var offset5 = $('.section5').offset().top

    var section
    if (scrt < offset2 - 70) {
      section = 1
    } else if (scrt >= offset2 - 70 && scrt < offset3 - 70) {
      section = 2
    }
    else if (scrt >= offset3 - 70 && scrt < offset4 - 70) {
      section = 3
    }
    else if (scrt >= offset4 - 70 && scrt < offset5 - 70) {
      section = 4
    }
    else {
      section = 5
    }
    $('header a').removeClass('active')
    $('.btn' + section).addClass('active')

  }//fn scroll spy

  scrollspy()
  $(window).scroll(function () {
    scrollspy()
  }).resize(function () {
    scrollspy()
  })

  $('header a').click(function (e) {
    e.preventDefault()
    var sectn=$(this).attr('data-n')
    var scrTarget=$('.section'+sectn).offset().top -70
    window.scrollTo({
      left: 0,
      top: scrTarget,
      behavior: 'smooth'

    })
    //return false
  })

})//ready




/* scrt >= offsettop()-winh* n + innerhight */