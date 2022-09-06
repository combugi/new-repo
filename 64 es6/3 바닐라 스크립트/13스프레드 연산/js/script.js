/* 1 */
/* let arr1 = ["가","나","다"]
let arr1Copy=arr1
arr1.pop()//가,나
console.log(arr1Copy); */

/* ------참조(refer)------ */
let arr1 = ["가", "나", "다"]
let arr1Copy = []
document.querySelector(".btn1").addEventListener("click", () => {
  for (i = 0; i < arr1.length; i++) {
    arr1Copy.push(arr1[i])

  }
  arr1.pop()//가,나
  console.log(arr1Copy);//가,나,다
})
/* ---------------------------------------------------------------- */
let arr2 = ["가", "나", "다"]
document.querySelector(".btn2").addEventListener("click", () => {
  /* let arr2Copy */

  let arr2Copy = arr2.map(v => v)

})
let arr3 = ["가", "나", "다"]
document.querySelector(".btn3").addEventListener("click", () => {
  let arr3Copy = [...arr3] //스프레드 오퍼레이터
  arr3.pop()
  console.log(arr3Copy)
})
let obj4 = {
  이름: "홍", 나이: "20", 성별: "남"
}
document.querySelector(".btn4").addEventListener("click", () => {
  let obj4Copy = { ...obj4 }
  obj4.이름 = "김"
  console.log(obj4Copy);
})
/* ------------------------------------------------------ */
var arr5 =[
  { 이름:"홍" , 나이:"20" , 성별:"남"},
  { 이름:"김" , 나이:"21" , 성별:"남"},
  { 이름:"이" , 나이:"23" , 성별:"여"},
]
/* var arr5Copy=[
 {...arr5[0]},
 {...arr5[1]},
 {...arr5[2]},
] */
document.querySelector(".btn5").addEventListener("click", () => {
/*  arr5Copy=[...arr5] //얕은복사 */ // ...스프레드 문법을 쓸때에는 소괄호만 제거할수있다.
/* deep copy */
 arr5.map(v=>{ 
  return {...v} //[{},{},{}]
 })//map
 console.log(arr5);
})