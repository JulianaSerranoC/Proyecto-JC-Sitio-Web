document.getElementById("btn_iniciar-sesión").addEventListener("click", iniciarSesión);
document.getElementById("btn_registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPagina);


/*variables declaradas*/ 
let formulario_login = document.querySelector(".formulario_login");
let formulario_register = document.querySelector(".formulario_register");
let contenedor_login_register = document.querySelector(".contenedor_login-register");
let caja_principal_login = document.querySelector(".caja_principal_login");
let caja_principal_register = document.querySelector(".caja_principal_register");

function anchoPagina(){

    if(window.innerWidth > 850){
        caja_principal_login.style.display = "block";
        caja_principal_register = "block";
    } else {
        caja_principal_register.style.display = "block";
        caja_principal_register.style.opacity = "1";
        caja_principal_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.style.left = "0px";
    }
    
}

function iniciarSesión() {

    if (window.innerWidth > 850) {
    formulario_register.style.display = "none"; /*Cuando le demos click al formulario en iniciar sesión,
    se va a mostrar la parte de inicio de sesión*/
    contenedor_login_register.style.left = "10px";
    formulario_login.style.display = "block";
    caja_principal_register.style.opacity = "1";
    caja_principal_login.style.opacity = "0";
    } else {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_principal_register.style.display = "block";
        caja_principal_login.style.display = "none";
    }

}

function register() {

    if (window.innerWidth > 850){
        formulario_register.style.display = "block"; /*Cuando le demos click al formulario en registrar,
        se va a mostrar la parte de registro*/
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_principal_register.style.opacity = "0";
        caja_principal_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "block"; 
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_principal_register.style.display = "none";
        caja_principal_login.style.display = "block";
        caja_principal_login.style.opacity = "1";
    }

}