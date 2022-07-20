$(function(){

  function headerMotion(){
    scrt = $(window).scrollTop()
    if(scrt >= 35){
      $('header').addClass('active')
    }else{
      $('header').removeClass('active')
    }

    if(scrt >= 125){
      $('header').addClass('active-bg')
    }else{
      $('header').removeClass('active-bg')
    }

    if(scrt >= 300){
      $('.top-btn').fadeIn()
    }else{
      $('.top-btn').fadeOut()
    }
  }//fn headerMotion

  headerMotion()
  $(window).scroll(function(){
    headerMotion()
  }).resize(function(){
    headerMotion()
  })//window event

  $('.top-btn').click(function(){
    window.scrollTo({
      top : 0 ,
      behavior : 'smooth'
    })
  })
})