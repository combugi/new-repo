import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, deleteUser, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
/* 이메일 회원 등록  (비동기)*/
function fnRegister(email, pw) {

  return new Promise(function (resolve) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pw).then((result) => {
      let user = result.user//로그인된 사용자 정보
      resolve(user)
    }).catch((error) => {
      alert(error.message)
    });

  })//return new promise
}//fnRegister

function fnSendEmail(user) {
  return new Promise(function (resolve) {
    const auth = getAuth();
    sendEmailVerification(user).then(() => {
      resolve()
    });
  })//promis
}//send email

function fnLogOut() {
  return new Promise(function (resolve) {
    const auth = getAuth();
    signOut(auth).then(() => {
      resolve()
    }).catch((error) => {
      alert(error.message)
    });
  })//promise
}//fn log out

/* 인증확인 함수 */
function fnLogIn(email, pw) {
  return new Promise(function (resolve) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email, pw).then((result) => {
      let user = result.user // auth.currentUser와 동일
      resolve(user)
    }).catch((error) => {
      alert(error.message)
    });
  })//promise
}//fnlogin
/* -------------회원탈퇴 함수 */
function fnDeRegister(){
  return new Promise(function(resolve){
    const auth = getAuth();
    deleteUser(auth.currentUser).then(() => {
      resolve()
      // User deleted.
    }).catch((error) => {
      // An error ocurred
      // ...
    });
  })
}

/* 구글로그인----------함수 */
$(".google-login-btn").click(function(){
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  signInWithPopup(auth,provider).then((result) => {
    let credential = result.credential;
    let user = result.user;
  }).catch((error) => {
    alert(error.message)
  });

})
 
/* 이메일 회원가입 버튼------------------------------------------ */
$(".email-register-btn").click(async function () {
  var email = $(".user-email").val()
  var pw = $(".user-password").val()
  let user = await fnRegister(email, pw) //회원등록 후 로그인된 사용자 정보가 user로 반환
  await fnSendEmail(user)//인증메일 보내기
  await fnLogOut()//로그아웃 시키기
  alert("인증메일을 보냈습니다. 확인후 다시 로그인")
})//click



/* 로그인 버튼 프로세스 */
$(".login-btn").click( async function () {
  var email = $(".login-email").val()
  var pw = $(".login-password").val()
  let user = await fnLogIn(email, pw)  //로그인후 사용자 정보를 user로 반환
   if(!user.emailVerified){//인증이된 사용자아니라면
    alert("인증 후 로그인을 시도하세요")
   }else{//인증되지 않은 사용자

   }
   
 
})
/* 로그 아웃 버튼 프로세스--------------------------------------------- */
$(".logout-btn").click(async function(){
   await fnLogOut()
   alert("로그아웃 성공")
})//click






//이메일가입
//인증메일
//등...




/* 로그인 상태관찰 이벤트 */
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    $(".login-before").hide()//로그인된상태
    $(".login-after").show()
    $(".login-after .uid").html(user .uid)//로그인된상태
    $(".login-after .email").html(user .email)
  
  } else {
    //로그아웃된상태
    $(".login-before").show()
    $(".login-after").hide()
    $(".login-after .uid").html(user .uid)//로그인된상태
    $(".login-after .email").html(user .email)

  }
});
$(".deregister-btn").click(async function(){
 await fnDeRegister()
 alert("회원탈퇴가 성공하셧습니다.")
})