$(function () {
function motion(){
  var offset1= $(".section1").offset().top
  var offset2= $(".section2").offset().top
  var offset3= $(".section3").offset().top
  var offset4= $(".section4").offset().top
if(scrt<offset2){
 TweenMax.to(".section1 .land .line",1,{morphSVG:".section1 .land .triangle",ease:Linear .easeNone})
 TweenMax.to(".section1 .port .line",1,{morphSVG:".section1 .port .triangle",ease:Linear .easeNone})
}else{
  TweenMax.to(".section1 .land .line",1,{morphSVG:".section1 .land .triangle",ease:Linear .easeNone})
  TweenMax.to(".section1 .port .line",1,{morphSVG:".section1 .port .triangle",ease:Linear .easeNone})
}
if(scrt>=offset2&&scrt<offset3){
 TweenMax.to(".section1 .land .line",1,{morphSVG:".section1 .land .triangle",ease:Linear .easeNone})
 TweenMax.to(".section1 .port .line",1,{morphSVG:".section1 .port .triangle",ease:Linear .easeNone})
}else{
  TweenMax.to(".section1 .land .line",1,{morphSVG:".section1 .land .triangle",ease:Linear .easeNone})
  TweenMax.to(".section1 .port .line",1,{morphSVG:".section1 .port .triangle",ease:Linear .easeNone})
}
if(scrt>=offset3&&scrt<offset4){
 TweenMax.to(".section1 .land .line",1,{morphSVG:".section1 .land .triangle",ease:Linear .easeNone})
 TweenMax.to(".section1 .port .line",1,{morphSVG:".section1 .port .triangle",ease:Linear .easeNone})
}else{
  TweenMax.to(".section1 .land .line",1,{morphSVG:".section1 .land .triangle",ease:Linear .easeNone})
  TweenMax.to(".section1 .port .line",1,{morphSVG:".section1 .port .triangle",ease:Linear .easeNone})
}
if(scrt>=offset4){
 TweenMax.to(".section1 .land .line",1,{morphSVG:".section1 .land .triangle",ease:Linear .easeNone})
 TweenMax.to(".section1 .port .line",1,{morphSVG:".section1 .port .triangle",ease:Linear .easeNone})
}else{
  TweenMax.to(".section1 .land .line",1,{morphSVG:".section1 .land .triangle",ease:Linear .easeNone})
  TweenMax.to(".section1 .port .line",1,{morphSVG:".section1 .port .triangle",ease:Linear .easeNone})
}
}//fn
motion()
$(window).resize(function(){
  motion()
}).scroll(function(){
  motion()
})
})//ready