import { loginauth } from "../controller/firebase.js";

const recibir = document.getElementById('loginbtn');

async function validar() {
    const email = document.getElementById('username').value;
    const password = document.getElementById('userpassword').value;

    if (email.trim() === '' || password.trim() === '') {
        alert("Por favor, ingresa tu correo electrónico y contraseña.");
        return; 
    }

    const verificar = loginauth(email, password);
    const validation = await verificar;

    if (validation != null) {
        alert("Autenticación de usuario exitosa: " + email);
        window.location.href = "../templates/home.html";
    } else {
        console.log("Sesión " + email + " no validada");
        alert("Usuario o contraseña incorrectos.");
        
    }
}

window.addEventListener('DOMContentLoaded', async () => {
    recibir.addEventListener('click', validar);
});

