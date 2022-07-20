$(function(){
  $('.door-btn').click(function(){
    $('door-con>div').toggleClass()
  })





  $('.cube-btns button').click(function(){
   
    var rotateName= $(this).attr('data-rotateName')
    $('.cube1').removeClass('rotate-front  rotate-back  rotate-left  rotate-right  rotate-top  rotate-bottom')
    $('.cube1').addClass(rotateName)




  })
})


