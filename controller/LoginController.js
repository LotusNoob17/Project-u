function iniciarSesion() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (validarCredenciales(username, password)) {
        mostrarMensaje('Inicio de sesión exitoso', 'success');
    } else {
        mostrarMensaje('Credenciales incorrectas. Inténtalo de nuevo.', 'error');
    }
}

function olvidasteContrasena() {
    alert('¡Recuperación de contraseña!'); 
}

function registrarusuario(){
    alert('¡Registrar nuevo usuario!'); 
}

function validarCredenciales(username, password) {
    return username === 'usuario' && password === 'contraseña';
}


function mostrarMensaje(mensaje, tipo) {
    switch (tipo) {
        case 'success':
            alert('¡Éxito! ' + mensaje);
            break;
        case 'error':
            alert('Error: ' + mensaje);
            break;
        default:
            alert(mensaje);
    }
}