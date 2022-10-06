import { getFirestore, collection, doc, addDoc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, writeBatch, query, where, orderBy, limit, onSnapshot } from "  https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";

var docid = new URLSearchParams(location.search).get("docid")
/* 단일 문서 가져오기 함수 */
function fnGetDoc() {
  //주소에 적힌 docid 값을 가져오기


  alert(docid)
  const db = getFirestore();
  const docRef = doc(db, "일정컬렉션", docid);
  const docSnap = getDoc(docRef).then((docSnap) => {
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
    $(".title").html(docSnap.data().제목)
    $(".date").html(docSnap.data().날짜)
    $(".time").html(docSnap.data().시간)
    $(".desc").html(docSnap.data().내용)
  })//getDoc then
}//fn Get doc
fnGetDoc()








function fnDeleteDoc(docid) {

  return new Promise(function (res) {
    const db = getFirestore();
    deleteDoc(doc(db, "일정컬렉션", docid)).then(() => {
      res()
    })//deleteDoc then
  })//promise
}//fn DeleteDoc






$(".delete").click(async function () {
 await fnDeleteDoc(docid)
 alert("일정을 삭제 했습니다.")
 location.href="./index.php"
})