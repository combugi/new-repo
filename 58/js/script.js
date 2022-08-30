$(function () {
  $('img').mousemove(function (e) {
    var x = e.pageX
    var y = e.pageY
    var offsetL = $('figure.img-box').offset().left
    var offsetT = $('figure.img-box').offset().top

    $('figure.img-box img.color').css({ '-webkit-mask-position': (x - 50 - offsetL) + "px  " + (y - 50 - offsetT) + "px  " })

  })

  $('.zoom').mousemove(function (e) {
    var mouseX = e.pageX
    var mouseY = e.pageY
    var bigoffsetLeft = $(".zoom .big").offset().left
    var bigoffsetTop = $(".zoom .big").offset().top
    var maskSize = 200 //마우스 포인터 마스크 크기
    var maskX = mouseX - bigoffsetLeft - maskSize * 0.5
    var maskY = mouseY - bigoffsetTop - maskSize * 0.5
    /* 마우스 위치를 비율로 환산하기  */
    var mouseStartX = $(".zoom").offset().left
    var mouseStartY = $(".zoom").offset().top
    var zoomwidth = $(".zoom").innerWidth()
    var zoomheight = $(".zoom").innerHeight()
    var bigimgWidth =$(".zoom .big").innerWidth()
    var bigimgHeight =$(".zoom .big").innerHeight()

    var mouseRangeX = zoomwidth
    var mouseRangeY = zoomheight
    var mouseRatioX = (mouseX-mouseStartX)/mouseRangeX
    var mouseRatioY = (mouseY-mouseStartY)/mouseRangeY

    var bigimgmoveRangeX =zoomwidth-bigimgWidth
    var bigimgmoveRangeY =zoomheight-bigimgHeight 

    var bigimgX =mouseRatioX*bigimgmoveRangeX
    var bigimgY =mouseRatioY*bigimgmoveRangeY

   
   

   
    console.log()
    $('.zoom .big').css({ "-webkit-mask-position": maskX + "px  " + maskY + "px  ",
     "left":bigimgX,
     "top": bigimgY, })
  })

  /* 마우스 비율에 따라 이미지 크기가 바뀐다. */
})