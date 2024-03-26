import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    sendEmailVerification
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyA3qdhD7m036I1n2FGJZaPOWgoSduuG500",
    authDomain: "jdrpapiweb2024a.firebaseapp.com",
    projectId: "jdrpapiweb2024a",
    storageBucket: "jdrpapiweb2024a.appspot.com",
    messagingSenderId: "932900446513",
    appId: "1:932900446513:web:85f69f23c48bb5204ad010",
    measurementId: "G-VJP5DQKK51"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const enviar = () => sendEmailVerification(auth.currentUser);

// Método de autenticación de usuario con correo google
export const sigInWithPopup = (auth, provider) => signInWithPopup(auth, provider);

// Método de autenticación de usuario con correo electrónico y contraseña
export const loginauth = (email, password) => signInWithEmailAndPassword(auth, email, password);

// Método para cerrar sesión
export const loginout = () => signOut(auth);

// Función para verificar el estado del usuario
export function userstate() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            console.log(uid);
        } else {
            window.location.href = "../index.html";
        }
    });
}


// Método para registrar cuentas con correo electrónico y contraseña
export const registerauth = (email, password) => createUserWithEmailAndPassword(auth, email, password);

