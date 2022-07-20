$(document).ready(function(){
  $('.ex1 button').click(function(){
    var 국어=Number($('.ex1 .ko').val())
    var 영어=Number($('.ex1 .en').val())
    var 수학=Number($('.ex1 .mt').val())
    var 총점 = 국어+영어+수학
    var 평균=총점/3
    var result=평균.toFixed(2)
    
    alert('총점은 '+총점+'점이고 평균은 '+평균+'입니다')
  })
$('.ex2 button').click(function(){
  var 상의=$('.ex2 .a input checked').val()
  var 하의=$('.ex2 .a input checked').val()
  var 신발=$('.ex2 .a input checked').val()
  var result=상의,하의,신발
  
  alert=(result)
})
})