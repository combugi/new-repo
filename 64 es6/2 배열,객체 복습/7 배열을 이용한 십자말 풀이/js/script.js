var 글자갯수 = 0
var 정답갯수 = 0
for (i = 0; i < arr1.length; i++) {
  $(`tbody`).append('<tr></tr>')
  for (j = 0; j < arr1[i].length; j++) {
    if (arr1[i][j] === '') {//해당배열의 글자가 없으면
      var td = `<td></td>`
    } else {
      글자갯수++
      var td = `
    <td>
      <input 
        data-row="${i}"
        data-col="${j}" 
        type="text" 
        maxlength="1"
      >
    </td>
    `  
    
    }
  $(`tr:last-child`).append(td)//append

  }//for j
}//i

/* --------------------- 칸만드는 코드----------- */
for(var i=0; i<arr2.length; i++){
  var row =arr2[i][0]
  var col =arr2[i][1]
  
  $(`tr:nth-child(${row+1}) td:nth-child(${col+1})`).append(
    `<span>${i+1}</span>
    `)
}

/* --------------------------- ---------- */
$('input').click(function () {
  var 줄 = $(this).attr('data-row')
  var 칸 = $(this).attr('data-col')
  var 정답 = arr1[줄][칸]
  var 입력값 = $(this).val()
  if (정답 === 입력값) {
    정답갯수++
    $(this).addClass('active')
    if(정답갯수===글자갯수){
      alert("성공")
    }
  }
})

/* ---------------------정답체크 코드-------------------------- */

















