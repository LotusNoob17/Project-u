
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js'

const firebaseConfig = {
  apiKey: "AIzaSyA3qdhD7m036I1n2FGJZaPOWgoSduuG500",
  authDomain: "jdrpapiweb2024a.firebaseapp.com",
  projectId: "jdrpapiweb2024a",
  storageBucket: "jdrpapiweb2024a.appspot.com",
  messagingSenderId: "932900446513",
  appId: "1:932900446513:web:85f69f23c48bb5204ad010",
  measurementId: "G-VJP5DQKK51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//metodo de autenticacion de usurio
export const loginauth=(email,password)=>
signInWithEmailAndPassword(auth, email, password)

export const loginout=()=>
signOut(auth)

export function userstate(){
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
  } else {
    window.location.href="../index.html"
  }
});
}
