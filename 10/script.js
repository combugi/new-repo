$(document).ready(function(){
 $('.ex1 button').click(function(){
  var num =Number ($('.ex1 input').val())
  var result = num.toFixed(2)
  alert(result)
 })

 $('.ex2 button').click(function(){
  var num1= $('.ex2.sel1').val()
  var num2= $('.ex2.sel2').val()
  alert(result)
 })

 $('.ex3 button').click(function(){
  var num1 = $('.ex3 .num1 input:checked').val()
  var num2 = $('.ex3 .num2 input:checked').val()
  var 나누기결과= num1/num2 //0.123456
  나누기결과= parseInt(나누기결과*100)*0.01 //(12.3456)12*0.1=0.1
  alert(나누기결과)
 })

 $('.ex4 button').click(function(){
  var 상품가격 = parseInt($('.ex4 .sel1').val()) //2000
  var 옵션가격 = parseInt($('.ex4 .num1 input:checked').val())//100
  var 수량=$(".ex4 .num3").val()
  var 총가격 = (상품가격 + 옵션가격)*수량
  alert(총가격)
 })
 
})
