var 숫자배열 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var 문제배열 = []
var 시도횟수 =0

//뽑아 놓고 지워야한다  

$(function () {


  for (i = 1; i <= 4; i++) {
    var 랜덤번호 = Math.floor(Math.random() * 숫자배열.length) //0.000001~0.99999 > 0 , 1 ,2
    var 숫자 = 숫자배열[랜덤번호] //숫자배열[2]
    문제배열.push(숫자)//문제 = [2]
    숫자배열.splice(랜덤번호, 1)//숫자배열 [0,1]

  }//for
  console.log(문제배열);

  $('.result').click(function () {
    var 아웃
    var 스트라이크
    var 볼
    for (i = 1; i <= 4; i++) {
      var 입력숫자 = parseInt($(`input:nth-child(${i})`).val()) //for 안의 i를 
      var 일치하는배열번호 = 문제배열.indexOf(입력숫자)//문제배열[0,5,3,1] 일치하는 값이 있으면 해당 배열번호를 리턴,없으면-1
      if (일치하는배열번호 === -1) {
        아웃++
        $(`input:nth-child(${i})`).addClass(`.out`)
      } else if (일치하는배열번호 === i - 1) {
        스트라이크++
        $(`input:nth-child(${i})`).addClass(".strike")
      } else {
        볼++
        $(`input:nth-child(${i})`).addClass(".ball")
      }
    }//for
    console.error(입력숫자);
    시도횟수++
    $(".tries").text(`시도횟수:${시도횟수}`)
    if(스트라이크===4){
      alert("성공")
    }else{
      $(".result").hide()
      $(".agian").show()
    }

  })//click
  $("again").click(function(){
    $("input").val("")
    $(".again").hide()
    $(".result").show()
  })

})//ready

