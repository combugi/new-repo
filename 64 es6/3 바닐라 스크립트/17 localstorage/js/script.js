
/*  window.localStorage.setItem('a','1') //setItem() 저장
 window.localStorage.removeItem('a') // removeItem('a')제거
 console.log(window.localStorage.getItem('a'))//getItem() 호출 */




let isLogged = localStorage.getItem("logged") //true 혹은 false
if (isLogged) {
  /* document.querySelector(".ex1 form").remove() */
  document.querySelector(".ex1 form").style.display = "none"
}




document.querySelector(".ex1 button").addEventListener("click", (e) => {
  e.preventDefault()
  let id = document.querySelector(".ex1 input[type=text]").value
  let pw = document.querySelector(".ex1 input[type=password]").value
  let isChecked = document.querySelector(".ex1 input[type= checkbox]").checked //true ,false
  if (isChecked) {
    window.localStorage.setItem("logged", true) //("loged",true)란 변수가 하드디스크에 저장된다.
  }
  console.log(window.localStorage.getItem('logged'))//getItem() 하드디스크에 호출한다
  /* window.localStorage.setItem('a','1') */ //.setItem() a=1 하드디스크에 저장해온다
})
/* --------------------------------ex2 ------------------------------------------*/
/* userArr = [
  {name:'홍' age :24},
] */


let userArrJson = localStorage.getItem('userArrJson')//배열값,null
let userArr
if(userArrJson){//이전에 저장한 배열이 있을경우
  userArr=JSON.parse(userArrJson)//json데이터를 자바스크립트 데이터로 변경
}else{//베열이 없을 경우
  userArr=[]
}



document.querySelector(".ex2 .add").addEventListener("click", () => {
  let personObj = {}
  personObj.name = document.querySelector(".ex2 .name").value
    personObj.age =document.querySelector(".ex2 .age").value
    userArr.push(personObj)
    userArrJson =JSON.stringify(userArr)//데이터를 제이슨 형태의 데이터로 바꾼다는 의미가 담긴 코드 
    localStorage.setItem("userArrJson",userArrJson)



    console.log(userArr )

 
})
document.querySelector(".ex2 .reset").addEventListener("click",()=>{
  console.log(localStorage.removeItem("userArrJson"));
})



document.querySelector(".ex2 .output").addEventListener("click",()=>{
  document.map(()=>{
    
  })
})






