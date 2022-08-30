$(function () {
  var nameArr1 = ['홍길동', '아무개', '무명씨']

  $(".ex1 .push").click(function () {
    nameArr1.push('개똥이')
    console.log(nameArr1);
  })
  $(".ex1 .unshift").click(function () {
    nameArr1.unshift('개똥이')
    console.log(nameArr1);
  })
  $(".ex1 .pop").click(function () {
    nameArr1.pop('')
    console.log(nameArr1);
  })
  $(".ex1 .shift").click(function () {
    nameArr1.shift('')
    console.log(nameArr1);
  })
  $(".ex1 .length").click(function () {
    var leng = nameArr1.length

    console.log(leng);
  })
  $(".ex1 .index").click(function () {
    var index = nameArr1[0]

    console.log(index);
  })
  $(".ex1 .splice").click(function () {
    nameArr1.splice(1, 0, '철수')

    console.log(nameArr1);
  })
  /* ---------------------------------------------ex1------------------------------------------------- */
  var ex2Arr = []
  $(".ex2 button").click(function () {
    for (i = 1; i <= 1000; i++) {
      ex2Arr.push(i)
    }
    console.log(ex2Arr)
    /*  ex2Arr.push() //for 구문 이용 */

  })
  /* -----------------------------------------------ex2-------------------------------------------------- */
  var ex3Arr = ["김", "이", "박", "고", "정", "민"]

  $(".ex3 button").click(function () {
    for (i = 0; i <= ex3Arr.length - 1; i++) {
      var txt = ex3Arr[i]
    }
    console.log(txt)


  })

  /* ---------------------------------------------ex3------------------ */
  var ex4Arr = ['홍길동', '아무개', '무명씨', '철수', '영희']
  var cnt = 0

  $(".ex4 button").click(function () {
    if (ex4Arr.length > 0) {
      var randomIndex = Math.floor(Math.random() * ex4Arr.length) //랜덤한 번호를 뽑는다. length를 적용할시 마지막 항에만 해당되어 나옴
      var name = ex4Arr[randomIndex]
      cnt++
      console.log(`${name}는 ${cnt}등`)
      ex4Arr.splice(randomIndex, 1) //랜덤하게 뽑힌 항을 하나 제거 한다


    }//  

  })//click
  var ex5Arr = ['홍길동', '아무개', '무명씨', '철수', '영희']

  $(".ex5 button").click(function () {
    if (ex5Arr.length > 0) {//길이만큼 나와야 하고 한꺼번에 증감연산은 사용금지
      var randomIndex = Math.floor(Math.random() * ex5Arr.length)
      var name = ex5Arr[randomIndex]//이름이 랜덤으로 출력
      var count=


      console.log(`${name}는 ${count}등`)
      ex5Arr.splice(randomIndex, 1)




    }


    //증감연산 사용 금지
  })//click



})//ready