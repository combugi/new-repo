$(function () {


  var arr1 = [
    ['홍길동', '24세', '남성', '000-0000-0000'],
    ['무명씨', '21세', '여성', '000-0000-0000'],
    ['아무개', '24세', '남성', '000-0000-0000'],
    ['김순희', '22세', '여성', '000-0000-0000'],
  ]
  $(".ex1 button").click(function () {
    $(".ex1 .result").empty()
    for (j = 0; j < arr1.length; j++) {
      for (i = 0; i < arr1[j].length; i++) {
        $('.ex1 .result').append(`<div></div>`)
      }
      $(".ex1 .result ").append(`<span>${arr1[0][j]}</span>`)

    }
  })


  /* ------------------------------------------------------------------------------------- */

  var arr2 = [] //누적하고 싶은 배열
  $(".ex2 .add").click(function () {//새로운 배열;즉 지워도 되는 배열

    var personArr = []
    var name = $('.ex2 .name').val()
    personArr.push(name) //홍길동
    var age = $(".ex2 .age").val()
    personArr.push(age) //홍길동 ,24
    var gender = $(".ex2 .gender:checked").val()
    personArr.push(gender) //홍길동 ,24,남성 
    var tel = $('.tel').val()
    personArr.push(tel)//홍길동,24,남성 ,010-0000-0000
    arr2.push(personArr)


    console.log(arr2);


    /* arr2[
      [홍길동,24,남성 ,010-0000-0000]
      [홍길동,24,남성 ,010-0000-0000]
      [홍길동,24,남성 ,010-0000-0000]
      [홍길동,24,남성 ,010-0000-0000]
    ] */


  })//add click




  $(".ex2 .print").click(function () {
    $(".ex2 .result").empty()
    for (i = 0; i < arr2.length; i++) {
      $(".ex2 .result").append(`<tr></tr>`)

      for (j = 0; j < arr2[i].length; j++) {
        $(".ex2 .result tr:last-child").append(`<td>${arr2[i][j]}</td>`)
      }
    }
/*     $(".ex2 .result").append(
      `<table>
        <thead>
        <tr>
        <th>이름</th>  <th>나이</th>  <th>성별</th>  <th>연락처</th> 
        </tr>
        </thead>
        <tbody></tbody>
      </table>
      `) */
  })//print click





})//ready

