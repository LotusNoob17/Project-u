import {GoogleAuthProvider} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';
import { auth, provider, sigInWithPopup} from "../controller/firebase.js";

provider.setCustomParameters({
    prompt: 'select_account'
  });

const googleLoginBtn = document.getElementById('googleloginbtn');

googleLoginBtn.addEventListener('click', () => {
    sigInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user);
            alert("Autenticación de usuario exitosa ");
            window.location.href = "../templates/home.html";
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error: ${errorCode}\n${errorMessage}`);
        });        
        
});



