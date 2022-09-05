/* $(function(){}) -> $(document).ready(function(){}) */

/* document.addEventListener("DOMContentLoaded",function(){

}) */
/* $(window).load(function(){

})//preloader 에 관련된 이벤트  코드 ver 제이쿼리 문법 */

/* window.addEventListener("load",function(){}) //바닐라 스크립트 문법 */

//값을 읽는 순서 변수>파라미터>리턴
//return으로 인해 뱉어낸 걸 n1이 받아낸다 라는 의미;리턴은 마지막에 와야한다는게 관례이고 그밑에 쓰면 안된다.




document.getElementById("btn1").addEventListener("click", function () {
  let arr1 = [1, 2, 3]

  arr1 = arr1.map(function (a) {//원래 객체와 동일한 길이의 배열을 반환한다.
    return a + 5

  })//map
  console.log(arr1);
})//click

document.getElementById("btn2").addEventListener("click", function () {
  let arr = [1, 2, 3]

  arr = arr.filter(function (v) {//조건에 해당되는 값만 배열로 반환한다
    return (v < 3)
  })//filter

})//click

document.getElementById("btn3").addEventListener("click", function () {
  let n = 5
  n = (n > 1) ? 2 : 3 // 둘중의 하나가 리턴이된다 참이면 앞쪽 거짓이면 뒤쪽
  console.log(n)
})//click
document.getElementById("btn4").addEventListener("click", function () {
  let n = 5
  n = (n > 1) && 2 //참일시 2가 리턴된다 거짓이면 "false"라는 문자가 출력됩니다.; (n > 1) || 2 
  console.log(n)
})//click


/* ------------------------------------------------------------------리턴과 관련된 코드들-------------------------------- */
//function기능이 화살표로 기능대치
/* document.getElementById("btn5").addEventListener("click", () => {
  alert("화살표함수")
})
function fn5() {

}
fn5()=> {

} */




/* 함수를 만드는 두가지 방법 */
/* function fn(){
   alert()
}
fn()
  

 fn=()=>{
   alert()
 } 
 fn()
 ------------------------------------
 let fn = () => {
  return 1

}
let fn = () => 1

*/

function fn(a) {
  return a
}


let fn = a => a //파라미터가 한개일때 소괄호 까지 없어지고 리턴함수 밖에 존재할경우 중괄호를 없앨 수있다.
let n = fn(1)

/* 함수호출도 호이스팅 관련해서 쓰이는것 */


let arr = [1, 2, 3]
arr =arr.map(v =>v + 1)
console.log(arr)

