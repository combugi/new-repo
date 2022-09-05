var 명단 = [
  {
    이름: "홍길동",
    성별: "남성",
    나이: 24,
  },
  {
    이름: "아무개",
    성별: "여성",
    나이: 20,
  },
  {
    이름: "무명씨",
    성별: "남성",
    나이: 40,
  },
  /*  for (i = 0; i <= 명단.length - 1; i++) {
     $(".ex1 .result").append(`<p></p>`)
     $(".ex1 .result p:last-child").append(`
     이름:${명단[i].이름}<br> <hr>
     성별:${명단[i].성별}<br>
      나이 :${명단[i].나이}<br>
   `)
   } */
]

/* [1,2,3,4] */

/* console.log(v.이름); */



/*    명단.forEach(function(v){
   
    $(".ex1 .result").append(`<p>
      ${v.이름} <br>
      ${v.성별} <br>
      ${v.나이}
    </p>`) */
$(function () {
  $(".ex1 button").click(function () {

    명단.map(function (v) {
      $(".ex1 .result").append(`<p>
      ${v.이름} <br>
      ${v.성별} <br>
      ${v.나이}
    </p>`)


    })//map

  })//click



  var arr = []

  $(".ex2 .input").click(function () {

    arr.push(
      {
        name: $(".ex2 input[type=text]").val(),
        gender: $(".ex2 input[type=radio]:checked").val(),
        age: $(".ex2 input[type=number]").val()
      }
    )

  })//click



  $(".ex2 .output").click(function () {
    $(".ex2 .result").empty()
    arr.map(function (v) {
      $(".ex2 .result").append(`<p>
       
        ${v.name} <br>
        ${v.gender} <br>
        ${v.age}
        
        </p> `)
    })//map
  })//click



  /*
   회원정보 =[
  v{아이디 :aaa,비밀번호:12345}
  v{아이디 :aaa,비밀번호:12345}
  v{아이디 :aaa,비밀번호:12345}
  v{아이디 :aaa,비밀번호:12345}
  ] 
 1)사용자가 입력한 id를 알아낸다.(aaa)
 
 2)배열의 갯수만큼 반복해서 입력한 아이디와 객체의 아이디를 비교
 
 
  3)추가

  
  
  */


  var 회원배열 = [
    { id: 'a', pw: "1234" },
    { id: 'b', pw: "1234" },
    { id: 'c', pw: "1234" },
  ]



  $(".ex3 .join").click(function () {
    //입력한 아이디 비밀번호 저장 
    var 입력한아이디 = $(`.ex3 input[type=text]`).val()
    var 입력한비밀번호 = $(`.ex3 input[type=password]`).val()
    //아이디 동일여부검사
    //회원 배열의 모든겂을 차례대로 돌아가며 할일(차례에해당되는 id값과 입력한값을 비교)
    회원배열.forEach(function (회원정보) {
      if (회원정보.id === 입력한아이디) {
        alert("이미 동일한 아이디가 존재합니다.")
      } else {
        회원배열.push(
          {
            id: 입력한아이디,
            pw: 입력한비밀번호,
          }
        )//push
      }//if,else
    })//for each
  })//click 
  //회원추가









  /* ---------------- */
  /*  var n = 0 */
  //사용자가 검색하고자 하는 이름 저장하기 
  /*     var 검색할이름 = $(".ex4 input").val()
      사람명단.forEach(function (검색데이터) {
        if (검색데이터.이름 === 검색할이름) {
          n++
          $(".ex4 .result").append(`
            성별: ${검색데이터.성별} <br>
            나이: ${검색데이터.나이}
          `)
        }
  
      })//foreach
      if (n === 0) { alert("해당되는 이름이 없습니다.") } */



  var 사람명단 = [
    { 이름: "홍길동", 성별: "여성", 나이: "30" },
    { 이름: "아무개", 성별: "남성", 나이: "20" },
    { 이름: "무명씨", 성별: "여성", 나이: "50" },
  ]




  $(".ex4 button").click(function () {
    var 검색할이름 = $(".ex4 input").val()
    var 걸린사람들배열 = 사람명단.map(function (순서에해당되는사람) {
      if (순서에해당되는사람.이름 === 검색할이름) {
        $(".ex4 .result").append(`
        성별:${순서에해당되는사람.성별}
        나이:${순서에해당되는사람.나이}
        `)
        return 순서에해당되는사람 //[]
      }//if
    })//map

    if (걸린사람들배열.length === 0) {
      alert('해당하는 사람 없음');
    }

  })//click
  //map() 이란 명령어 속성을 이용할때 return을 같이 이용하기 위함이다.



  var arr = [1, 2, 3, 4, 5]

  사람명단.map(function (v) {
    if (v < 2) {
      return v //[1,2]
    }//if
  })




  /* ex5 ------------------- */
  var arr5 = [0, -1, -2, -3, 4, -5, 6, -7]

  $(".ex5 button").click(function () {

    var arr=arr5.filter(function(v){
      if(v<0){
        return v // return으로 인해 배열형태로 되돌아 온다.map:[,-1,-2,-3,,-5,,-7] filter:[-1,-2] map은 주로 복사할때 filter는 값을 빼내올때
      }
    })
    
     alert(arr.length)
  })//click















})//ready
