$(function () {
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
    speed = speed * 0.95//속도 1에 가까울수록 0에 천천히 0에가까울수록 빨리 1에 도달한다
  }, 20)
})//ready