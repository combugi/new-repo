$(function () {
    var col=1
    var row=1
  function move(x, y) {
    
    col += x
    row += y
  
    if (col > 6) {
      col = 1
    }
  
    if (col < 0) {
      col = 5
    }
    if (row < 0) {
      row = 5
    }
  
    if (row > 6) {
      row = 1
    }
    $('.box').css({
      'left': (col - 1) * 50 + 'px',
      'top': (row - 1) * 50 + 'px'
  
    })
  
  }

  $('.right').click(function () { /* 방향 버튼을  클릭 할대한칸당
   검은색 사각형이 오게 끔 만들어야 한다 */
    //박스를 제이쿼리를 통해 찾고 해당되는 박스에 방향과 50이란 픽셀 값 그리고 px단위를 줌
    move(1, 0)
  })//click
  $('.left').click(function () { /* 방향 버튼을  클릭 할대한칸당
   검은색 사각형이 오게 끔 만들어야 한다 */

    //박스를 제이쿼리를 통해 찾고 해당되는 박스에 방향과 50이란 픽셀 값 그리고 px단위를 줌
    move(-1, 0)
  })//click
  $('.up').click(function () { /* 방향 버튼을  클릭 할대한칸당
   검은색 사각형이 오게 끔 만들어야 한다 */
    //박스를 제이쿼리를 통해 찾고 해당되는 박스에 방향과 50이란 픽셀 값 그리고 px단위를 줌
    move(0, -1)
  })//click
  $('.down').click(function () { /* 방향 버튼을  클릭 할대한칸당
   검은색 사각형이 오게 끔 만들어야 한다 */

    //박스를 제이쿼리를 통해 찾고 해당되는 박스에 방향과 50이란 픽셀 값 그리고 px단위를 줌
    move(0, 1)
  })//click

  /* 일반함수로 바꾸어 보자 */
})//ready