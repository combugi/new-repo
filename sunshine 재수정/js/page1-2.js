$(function(){
  $('.tab-menu button').click(function(){
    var n = $(this).attr('data-n')
    $('.map').hide()
    $('.map'+n).show()
    $('.tab-menu button').removeClass('active')
    $(this).addClass('active')
  })
})