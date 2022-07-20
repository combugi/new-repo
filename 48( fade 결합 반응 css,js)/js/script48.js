$(function () {
  var n = 1
  var isClick = true //o

  function change(type, btnN) {
    //클릭시간 제어------------------------//
    if (!isClick) {
      return false 
    }
    isClick = false
    setTimeout(function(){
      isClick=true
    },500)

  //이미지 번호를 증가하거나 번호를 지정하기------------------------//

    if (type === 'increase') {
      n++
    } else if (type === 'decrease') {
      n--
    } else if (type = 'indicator') {
      n = btnN
    }

    //이미지 번호 증감시 현재값 제어-------------------------//
    if (n > 5) { n = 1 }
    if (n < 1) { n = 5 }
    //이미지 숨기고 보여주기--------------//
    $('.carousel li').stop().fadeOut()
    $('.carousel li.imgbox' + n).stop().fadeIn()
    // 버튼 활성화  isClick기준 ----------
    $('.indicator button').removeClass('active')
    $('.btn' + n).addClass('active')
  }//fn change
  $('.next').click(function () {

    change('increase')
  })//click
  $('.prev').click(function () {

    change('decrease')
  })//click
  $('.indicator button').click(function () {

    change('indicator', parseInt($(this).attr('data-n')))

  })//click
})//ready