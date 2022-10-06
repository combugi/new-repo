import { getFirestore, collection, doc, addDoc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, writeBatch, query, where, orderBy, limit, onSnapshot } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";

/* 일정 추가 함수 ----------------------------------------------------------*/
function fnAddList(일자, 시간, 일정제목, 일정내용) {
  return new Promise(function (res) {
    var data = {
      일자: 일자,
      시간: 시간,
      일정제목: 일정제목,
      일정내용: 일정내용,
    }//data
    const db = getFirestore();
    addDoc(collection(db, "일정컬렉션"), data).then((doc) => {
      console.log(doc.id)
      res()
    })
  })//promise
}//fnAddList



/* 일정 가져오기 함수 ---------------------------------*/
function fnGetList(){
  return new Promise(function(res){
    const db = getFirestore();
    getDocs(collection(db, "일정컬렉션")).then((querySnapshot)=>{
      /*  */
  
      querySnapshot.docs.forEach((doc) => {
        console.log(doc.id, " : ", doc.data());
        res()
      });
    })
  })
}



/* 일정 추가  프로세스 --------------------*/
$(".add-list-btn").click(async function () {
 var 일자 = $(".input-date").val()
 var 시간 = $(".input-time").val()
 var 제목= $(".input-title").val()
 var 설명= $(".input-desc").val()
  await fnAddList(일자,시간,제목,설명)
  alert("성공적으로 문서 저장 완료.")
})//click

/* 일정 가져오기 프로세스 --------------------*/
$(".get-list-btn").click(async function () {
  const db = getFirestore();
  getDocs(collection(db, "일정컬렉션")).then((querySnapshot)=>{
    $(".output").empty()
    querySnapshot.docs.forEach((doc) => {
      $(".output").append(`
      <p>
      일자:${doc.data().일자}<br>
      시간:${doc.data().시간}<br>
      제목:${doc.data().제목} <br>
      설명:${doc.data().설명}<br>
      <a href="./detail.php?docuid=${doc.id}">상세보기</a>
      </p>`)
      //console.log(doc.id, " : ", doc.data());
    });
  })
})//click




//단일문서 가져오기 프로세스---------------

const db = getFirestore();
setDoc(doc(db, "컬렉션네임", "문서id"), {
  id: "",
  name: "",
  country: ""
}).then((doc)=>{
  console.log(doc.id)
})




