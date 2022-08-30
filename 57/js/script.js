$(function(){
  $(".ex1 button").click(function(){
    var 공의범위 = 100 - 0
    var 상금범위 = 40 - 0
    var 공의위치 = parseInt($(".ex1 input").val())
    var 공의위치비율 = 공의위치 /공의범위
    var 지급상금 = 공의위치비율 *상금범위
    alert(지급상금)
  })


  $('.ex2 button').click(function(){
    var 공의범위 = 100 - 0
    var 상금범위 = 40 - 0
    var 지급상금 = parseInt($('.ex2 input').val())
    var 상금비율 =지급상금/상금범위
    var 공의위치 = 상금비율 * 공의범위 
    
    alert(공의위치)
  })
  $('.ex3 button').click(function(){
    var 공의시작위치=25
    var 공의끝위치 =75
    var 공의범위= 공의끝위치-공의시작위치
     
    var 상금최소치=10
    var 상금최대치 = 30
    var 상금범위 =상금최대치-상금최소치

    var 사용자입력범위위치= Number($('.ex3 input').val())
   
    var 공의위치비율 = (사용자입력범위위치 -공의시작위치)/공의범위 // -25는 공의 시작점 /공의범위 +10 //10=상금의 시작점
    var 지급상금 = 공의위치비율 *상금범위+10
    alert(지급상금)
  })
  $(".ex4 button").click(function(){
    var 신장최대치 =200
    var 신장최소치 =150
    var 신장범위 = 신장최대치 - 신장최소치

    var 체중최대치=100 
    var 체중최소치=50
    var 체중범위=체중최대치-체중최소치

    var 사용자입력범위= Number($('.ex4 input').val())

    var 신장비체중 = (사용자입력범위 - 신장최소치)/신장범위
    var  정상체중 = 신장비체중 * 체중범위 +50
    alert(정상체중) 
  })
  $(".ex5 button").click(function(){
    var 스크롤최대치 =1000
    var 스크롤최소치 =500
    var 스크롤범위 = 스크롤최대치 - 스크롤최소치

    var 이미지최대치=30
    var 이미지최소치=1
    var 이미지범위=이미지최대치 - 이미지최소치

    var 스크롤도달위치 = 750
    
    var 스크롤비율 =스크롤도달위치-스크롤최소치/스크롤범위
    var 이미지번호 =스크롤비율*이미지범위/이미지최대치
    alert(이미지번호)
  })

})