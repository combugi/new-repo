$(function () {

  function sum(num1, num2) {
    var num1 = parseInt(num1)
    var num2 = parseInt(num2)

    alert(num1 + num2)
  }//fn

  $('.ex1 button').click(function () {
    var num1 = $('.ex1.num1').val()
    var num2 = $('.ex1.num2').val()
    sum(num1, num2)
  })//click



  $('.ex2 button').click(function () {
    var num1 = $('.ex2.num1').val()
    var num2 = $('.ex2.num2').val()
    sum(num1, num2)
  })//click

  /* ex22----------------------- */
  function fn_ex22(num1_1,num1_2,num2_1,num2_2){  
  var num1 = parseInt(num1_1+num1_2)//'11'-> 11 o
  var num2 = parseInt(num2_1+num2_2)//'11'-> 11 o
  var result=num1+num2//o

  alert(result)//o

  }//fn
  $('.ex22 button').click(function(){
    var num1_1 = $('.ex22 .num1-1').val()//'1''x
    var num1_2 = $('.ex22 .num1-2').val()//'1''x
    var num2_1 = $('.ex22 .num2-1').val()//'1''x
    var num2_2 = $('.ex22 .num2-2').val()//'1''x(인자로 받아와야 된다)

    fn_ex22(num1_1,num1_2,num2_1,num2_2)
   
  })//click

  function fn_ex4(num1_1,num1_2,num2_1,num2_2,num3_1,num3_2,num4,num5){
    var num1=parseInt(num1_1+num1_2+num2_1+num2_2)//1000
    var num2=parseInt(num3_1+num3_2)//10
    var num3=parseInt(num4)//6
    var num4=parseInt(num5)//5
    var re=num1-(num2*num3)
    var result=re/num4
    alert(result)

  }

  $('.ex4 button').click(function(){
    var num1_1=$('.ex4.num1-1').val()//1 x
    var num1_2=$('.ex4.num1-2').val()//0 x
    var num2_1=$('.ex4.num2-1').val()//0 x
    var num2_2=$('.ex4.num2-2').val()//0 x
    var num3_1=$('.ex4.num3-1').val()//1
    var num3_2=$('.ex4.num3-2').val()//0

    var num4=$('.ex4.num4').val()

    var num5=$('.ex4.num5').val()

    fn_ex4(num1_1,num1_2,num2_1,num2_2,num3_1,num3_2,num4,num5)
    
  })
 
})//ready

