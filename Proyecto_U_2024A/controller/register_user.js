import { registerauth, enviar } from "../controller/firebase.js";

const guardar = document.getElementById('registerbtn');

async function register() {
    const email = document.getElementById('username').value;
    const confirmEmail = document.getElementById('confirm_email').value;
    const password = document.getElementById('userpassword').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    // Verificar que los campos de correo electrónico coincidan
    if (email !== confirmEmail) {
        alert('Los correos electrónicos no coinciden');
        return;
    }

    // Verificar que los campos de contraseña coincidan
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    // Verificar que la contraseña tenga al menos 8 caracteres
    if (password.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres');
        return;
    }

    // Verificar que la contraseña tenga al menos un carácter especial
    const specialCharacterRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (!specialCharacterRegex.test(password)) {
        alert('La contraseña debe contener al menos un carácter especial');
        return;
    }

    // Verificar que la contraseña tenga al menos una letra mayúscula
    const uppercaseLetterRegex = /[A-Z]/;
    if (!uppercaseLetterRegex.test(password)) {
        alert('La contraseña debe contener al menos una letra mayúscula');
        return;
    }

    try {
        const userCredential = await registerauth(email, password);
        // Signed up 
        const user = userCredential.user;
        console.log(user);

        // Envía el correo de verificación y luego muestra un mensaje
        enviar().then(() => {
            console.log('Correo de verificación enviado');
            
        }).catch((error) => {
            console.error('Error al enviar el correo de verificación: ', error);
        });
        alert('Registro exitoso. Por favor verifica tu correo electrónico.');
        window.location.href = "../templates/registers_users.html";
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
    }  
}
window.addEventListener('DOMContentLoaded', async () => {
    guardar.addEventListener('click', register);
});
