$(function () {

  var isMobile = false;
  var filter = "win16|win32|win64|mac";
  if (navigator.platform) {
    isMobile = filter.indexOf(navigator.platform.toLowerCase()) < 0;

  }//if navigator
  if(!isMobile){
  var delta
  var speed = 0

  window.addEventListener("mousewheel", function (e) {
    e.preventDefault()
    delta = e.wheelDelta / -120
    speed = 30 * delta
  }, { passive: false })

  setInterval(function () {
    window.scrollTo({
      top: scrt + speed,

    })
    speed = speed * 0.85//속도 1에 가까울수록 0에 천천히 0에가까울수록 빨리 1에 도달한다
  }, 20)  
}//if
})//ready