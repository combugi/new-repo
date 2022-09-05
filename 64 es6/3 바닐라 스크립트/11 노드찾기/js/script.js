


/* let btnArrEx4 = document.querySelectorAll(".ex4 button")
btnArrEx4.forEach(function (v) {
  v.addEventListener("click", function (e) {
    //전부끈다
    btnArrEx4.forEach(function (v) {
      v.classList.remove("active")
    })//removeclass
    e.currentTarget.classList.add("active")
  })//click&addclass
})//forEach */

/* btnArrEx5=document.querySelectorAll(".ex5 button")//[button]
btnArrEx5.forEach(function(v){
  v.addEventListener("click",function(e){
    //(".ex5 button").not($(this)).removeClass("active")
    btnArrEx5.forEach(function(v){
      if(v!= e.currentTarget){
        v.currentTarget.classList.remove("active")
      }
    })
    e.currentTarget.classList.toggle("active")
  })
}) */
/* let divArrEx6=document.querySelectorAll(".ex6  div") //[div]
divArrEx6.forEach(function(el){
 el.addEventListener("click",function(v){
  v.currentTarget.parentElement.classList.add("active")
 })
})//foreach */
let divArrEx6 = document.querySelectorAll(".ex6 >div") //[div]
divArrEx6.forEach(function (el) {
  el.addEventListener("click", function (v) {
    let arr = v.currentTarget.children
    arr = Array.from(arr)
    arr.forEach(function (c) {
      c.classList.add("active")
    })
  })
})//foreach

let divarrex6 = document.querySelectorAll("ex6>div")
divarrex6.forEach(function (e) {
  e.addEventListener("click", function (v) {
    let arry = v.currentTarget.children
    arry = Array.from(arry)
    arry.forEach(function (c) {

      b.children.forEach(function (n) {
        v.classList.remove("active")
      })

      c.classList.add("active")
    })
  })
})//for each
/* ex7 */
let btnArrEx7 = document.querySelectorAll(".ex7 button")
btnArrEx7.forEach(function (v) {
  v.addEventListener("click", function (e) {
    let n = e.currentTarget.getAttribute("data-n")
    console.log(n);
    e.currentTarget.style.backgroundColor="red"
  })//addevent.e
})//foreach