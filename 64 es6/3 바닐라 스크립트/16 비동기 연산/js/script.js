//promise 걸어준 함수 가 있다면 그 해당되는 함수이름값에 .then()을 걸어준다
const f1 = () => {
  //회원정보(data;db로 가정)를 받아온다(몇초가 걸릴 지 모른다)
  return new Promise((resolve, err) => {//인자의 의미 resolve:풀어내다 err:에러
    setTimeout(() => {
      console.log("회원정보 전달하겠습니다.")
      resolve('회원정보')//resolve()는 return 처럼 맨 마지막에오며 다음 값이 오지 않아야 한다.
    }, Math.random() * 2000 + 1000)
  })//뒤에 있는 항목이 기다리는 동안 할일;promise
}//f1
const f2 = (a) => {
  //회원 정보를 출력한다
  console.log(a);

}
document.querySelector(".btn1").addEventListener("click", () => {
  f1().then((result) => {
    f2(result)
  })
})
/* --------------------------------------------------------------------------------- */
/* 일어나기 ?초 , 밥먹기 ?초 일하기 ?초 잠자기 */




function 일어나기() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('일어났음')
      resolve()
    }, Math.random() * 2000 + 1000)
  })
}
function 밥먹기() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('밥먹었음')
      resolve()
    }, Math.random() * 2000 + 1000)
  })
}
function 일하기() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('일함')
      resolve()
    }, Math.random() * 2000 + 1000)
  })
}
function 잠자기() {
  console.log('잠자기')
}//fn

/* const 일어나기 = ()=>{

} */
document.querySelector(".btn2").addEventListener("click", () => [
  /*   일어나기().then(()=>{
      밥먹기().then(()=>{
        일하기().then(()=>{
          잠자기()
        })//일하기.then()
      })//밥먹기.then()
    })//일하기 .then */

  /* 
    일어나기().then(()=>{
      return 밥먹기()
    }).then(()=>{
      return 일하기()
    }).then(()=>{
      잠자기()
    }) */


  일어나기()
    .then(() => 밥먹기())
    .then(() => 일하기())
    .then(() => { 잠자기() })

])//click

/* --------------------------------------------------------------- */

/* 물건(?)을 물류창고로  시간(?)발송 
   물류창고에서 우체부에물건(?) 전달
    우체부는 물건(?) 배달
    물건(?) 구매확정 */
/* 
    물류창고전달('핸드폰').then(function(물건){
     return 우체부에게전달(물건)
    }).then(function(물건){
      return 고객에게전달(물건)
    }).then(function(물건){
      구매확정(물건)
    }) */
/* async function 배송() {
  물건 = await 물류창고전달('핸드폰')
  물건 = await 우체부에게전달(물건)
  물건 = await 고객에게전달(물건)
  구매확정(물건)
} 
배송()*/
/* const 배송 = async () => {
  물건 = await 물류창고전달('핸드폰')
  물건 = await 우체부에게전달(물건)
  물건 = await 고객에게전달(물건)
  구매확정(물건)

}
배송()

function 물류창고전달(물건) {
  console.log(`물류창고로 ${물건} 배송시작`)
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(물건)
    }, Math.random() * 2000 + 1000)
  })//promise

}//fn


function 우체부에게전달(물건) {
  console.log(`우체부에게 ${물건} 전달받음`)
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(물건)
    }, Math.random() * 2000 + 1000)
  })
}
function 고객에게전달(물건) {
  console.log(`고객에게 ${물건} 배달시작`)
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(물건)
    }, Math.random() * 2000 + 1000)
  })
}
function 구매확정(물건) {
  console.log(`${물건} 구매확정`)
} */
/* --------------------------------------------------------------------------- */
document.querySelector(".btn4").addEventListener("click", () => {
  var five = document.querySelector(".btn4").target("input4").value
  
  const cal1 = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(five + 1)
      }, Math.random() * 2000 + 1000)
    })
  }
  cal1()

  const cal2 = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(cal1(five) * 2)
      }, Math.random() * 2000 + 1000)
    })
  }
  cal2()
  const cal3 = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(cal2(five) * 2)
      }, Math.random() * 2000 + 1000)
    })
  }
  cal3()



  cal1().then(() => {
    cal2().then(() => {
      cal3()
    })
  })

})//click