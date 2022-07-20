$(function () {
  var col = 1
  var row = 1
  var isClick = true//boolen
  var clickCnt = 0
  function move(x, y) {
    if (isClick === false) {

      return false;
    }
    isClick = false
    setTimeout(function () {
      isClick = true
    }, 1000)
    col += x
    row += y
    if (col > 6) {//7번째 칸에서 시작시 0번째칸으로 순간 이동(transition 제거하고 0번째칸으로 이동) 1번째칸으로 이동
      col = 0
      $('.box').addClass('fast').css({
        'left': (col - 1) * 20 + '%'
      })
      $('.box').css('left')//확인 css({})가아닌 ()만 있는건? left가 되는지 찾아보라 라는 뜻

      $('.box').removeClass('fast')//오른 쪽으로 갈때 조건 함수식 변환시
      col = 1 //1번째 칸으로 밀어넣는다. 
    }//right end
    $('.box').css({
      left: (col - 1) * 20 + "%"
    })

    if (col < 0) {//7번째 칸에서 시작시 0번째칸으로 순간 이동(transition 제거하고 0번째칸으로 이동) 1번째칸으로 이동
      col = 6
      $('.box').addClass('fast').css({
        'left': (col - 1) * 20 + '%'
      })
      $('.box').css('left')//확인 css({})가아닌 ()만 있는건? left가 되는지 찾아보라 라는 뜻
      $('.box').removeClass('fast')//왼 쪽으로 갈때 조건 함수식 변환시 여기까지;
      col = 5
    }//left end
    $('.box').css({
      'left': (col - 1) * 20 + '%' /* %로 할땐 갯수에 따라 값만 다르게 주면 된다. */
    })

    if (row > 6) {//7번째 칸에서 시작시 0번째칸으로 순간 이동(transition 제거하고 0번째칸으로 이동) 1번째칸으로 이동
      row = 0
      $('.box').addClass('fast').css({
        'top': (row - 1) * 20 + '%'
      })
      $('.box').css('top')//확인 css({})가아닌 ()만 있는건? left가 되는지 찾아보라 라는 뜻

      $('.box').removeClass('fast')//아래 쪽으로 갈때 조건 함수식 변환시
      row = 1 //1번째 칸으로 밀어넣는다. 
    }//right end
    $('.box').css({
      'top': (row - 1) * 20 + "%"
    })
    if (row < 0) {//7번째 칸에서 시작시 0번째칸으로 순간 이동(transition 제거하고 0번째칸으로 이동) 1번째칸으로 이동
      row = 6
      $('.box').addClass('fast').css({
        'top': (row - 1) * 20 + '%'
      })
      $('.box').css('top')//확인 css({})가아닌 ()만 있는건? left가 되는지 찾아보라 라는 뜻
      $('.box').removeClass('fast')//왼 쪽으로 갈때 조건 함수식 변환시 여기까지;
      row = 5
    }//top end

    $('.box').css({
      'top': (row - 1) * 20 + '%' /* %로 할땐 갯수에 따라 값만 다르게 주면 된다. */
    })

    clickCnt ++

    if(clickCnt > 4){
      alert('실패')
    }else if(clickCnt<=4 && col === 2 && row === 4){
      alert('성공')
    }
    //얼랏넣어 줄때복잡하게 인디케이터(클래스)버튼에 안넣고 박스 움직이는 함수 항에 넣어서 작성해도 된다....
    

  }//fn move end



  $('.indicator button').click(function () {

    move(
      parseInt($(this).attr('data-col')),
      parseInt($(this).attr('data-row'))
    )
  })//click
})//ready