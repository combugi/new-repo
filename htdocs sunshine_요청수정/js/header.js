$(function(){
  function headmotion(){
    scrt=$(window).scrollTop()
    if(scrt >=35){
      $('header').addClass('active')
    }else{
      $('header').removeClass('active')
    }
    if(scrt >=125){
      $('header').addClass('active-bg')
    }else{
      $('header').removeClass('active-bg')
    }
    if(scrt >=300){
      $('.top-btn').fadeIn()
    }else{
      $('.top-btn').fadeOut()
    }
  }//fn headmotion
  headmotion()
  $(window).scroll(function(){
    headmotion()
  })
  .resize(function(){
    headmotion()
  })//
  $('.top-btn').click(function(){
    window.scrollTo({
       top: 0 ,
       behavier : "smooth"
       
    })
   
  })
})