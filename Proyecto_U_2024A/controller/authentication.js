import {loginauth} from "../controller/firebase.js"
const recibir = document.getElementById('loginbtn')

async function validar(){
    const email = document.getElementById('username').value
    const password = document.getElementById('userpassword').value

    const verificar = loginauth(email, password)
    const validation = await verificar

    if(validation != null){
        alert("User authentication succesfull "+email)
        window.location.href="../templates/home.html"

    } else{
        console.log("Sesion" +email+ "not validation")
        alert("Error usuario")

    }
}    
window.addEventListener('DOMContentLoaded',async()=>{
    recibir.addEventListener('click',validar)
})   

