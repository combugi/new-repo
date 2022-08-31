$(function () {
  var arr1 = ['가', '나', '다']
  $(".ex1 .length").click(function () {
    var leng = arr1.length
    var char = arr1[leng - 1]   //arr[]값을찾고싶을때
    console.log(leng, char);
  })//click
  $(".ex1 .push").click(function () {
    arr1.push('라')
    console.log(arr1); //맨 뒤쪽에 추가생성
  })//click
  $(".ex1 .unshift").click(function () {
    arr1.unshift('나')
    console.log(arr1); //맨앞쪽에 추가생성
  })//click
  $(".ex1 .pop").click(function () {
    arr1.pop('가')
    console.log(arr1); //
  })//click
  $(".ex1 .splice").click(function () {
    arr1.splice(0, 1, 'a')
    console.log(arr1); //ex) 인자가 2개일경우 0번째 위치에 1개를 제거 인자가 3개일 경우 0번째 위치에 1개를 제거하고 a란 항을 추가 생성
  })//click
  /* ------------------------------------------------------------------------- */
  var arr2 = []
  $('.ex2 button').click(function () {
    for (i = 1; i <= 100; i++) {
      var count = arr2.push(i);
      console.log(count);
    }
  })
  var arr3 = ['홍', '김', '박', '이', '유']
  $('.ex3 button').click(function () {
    if (arr3.length > 0) { //0 보다 클때만 출력
      var RanNum = Math.floor(Math.random() * arr3.length)//0.000001-4.9999999999
      var name = arr3[RanNum]
      arr3.splice(RanNum, 1) //특정번호에 해당되는 성씨 지우기
      console.log(name)
    }
  })//click
  /* ------------------------------------------ex4----------------------------------------------- */
  var arr4 = ['홍', '김', '박', '이', '유']
  $('.ex4 button').click(function () {
    if (arr4.length > 0) {
      for (i = 1; i <= arr4.length; i++) {
        var RanNum = Math.floor(Math.random() * arr3.length)//0.000001-4.9999999999
        var name = arr3[RanNum]
        arr3.splice(RanNum, 1) //특정번호에 해당되는 성씨 지우기
        console.log(name)
      }
    }
  })
  /* ---------------------------------------------------------- */
  var arr5 =
    [
      ['홍길동', '남성', '000', 'sa'],
      ['김철수', '남성', '000'],
      ['이영희', '여성'],
      ['김순자', '여성', '000', 'tl', '시군구'],
    ]//arr5[3][0]->김순자 ,arr5 [3][1]->여성
  $('.ex5 button').click(function () {
    $('.ex5 .result').empty()
    $('.ex5 .result').append(`<table></table>`)
    for (i = 0; i <= arr5.length - 1; i++) {
      $('.ex5 .result table').append(`<tr></tr>`)
      for (j = 0; j <= arr5[i].length - 1; j++) {
        $(`.ex5 .result table tr:nth-child(${i + 1})`).append(`<td>${arr5[i][j]}</td>`)
      }


    }//for

    console.log(arr5);
    /* <table>
     <tr>
     <td>홍길동</td>
     <td>남성 </td>
      </tr> 
      </table> */



  })//click
  /* -------------------------------------------------------------------------------- */
  arr = [
    ['가', '나', '다'],//arr[0]
    ['a', 'b', 'c'],//arr[1]
    ['A', 'B', 'C'],//arr[2]

  ]
  $(".ex6 button").click(function () {
    $(".ex6 .result").html(' ')
    for (i = 0; i <= arr.length - 1; i++) {
      for (j = 0; j <= arr[i].length - 1; j++) {
        $(".ex6 .result").append(`<b>${arr[i][j]}</b>`)
      }//for j

      $(".ex6 .result").append(`<br>`)
    }
  })



  /* --------------------------------------------- */
  /*   var arr8 = [
      ['가', '나', '다'], //arr8[0]
      ['a', 'b', 'c'], //arr8[1]
      ['A', 'B', 'C'], //arr[2]
    ]
    $(".ex8 button").click(function () {
      $(".ex8 .result").empty()
      for (i = 0; i <= arr8.length - 1; i++) {
         $(".ex8 .result").append(`<div></div>`)
        for (j = 0; j <= arr8[i].length - 1; j++) {
          $(".ex8 .result div:last-child").append(`<b>${arr8[i][j]}</b>`)
        }//for j
      
      }
  
  
    })//click */

    var arr7=[이름,성별,전화번호]
      var 이름= $(".ex7 .name").val()
      var 성별= $(".ex7 .gender").val()
      var 전화번호= parseInt($(".ex7 .PhoneNum").val())

    $(".ex7 .nameadd").click(function(){
      $(".ex7 .result").empty()
      for(i=0; i<=arr7.length-1; i++){
        $(".ex7 .result").push(arr7)
      }
    })














  var arr8 = [
    ['가', '나', '다'],
    ['라', '마', '바'],
    ['사', '아', '자'],
  ]
  $(".ex8 button").click(function () {
    $(".ex8 .result").empty()
    for (i = 0; i <= arr8.length - 1; i++) {
      $(".ex8 .result").append(`<div></div>`)
      for (j = 0; j <= arr8[i].length - 1; j++) {
        $(".ex8 .result").append(`<b>${arr8[i][j]}</b>`)
      }


    }



  })































})//ready
//click var arr1=['가', '나', '다']
