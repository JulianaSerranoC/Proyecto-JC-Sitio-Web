document.getElementById("formulario_login").addEventListener("submit", function (event) {

    const correoLogin = document.getElementById("correoLogin").value; 
    const contraseñaLogin = document.getElementById("contraseñaLogin").value;

    const usuarioRegistrado = JSON.parse(localStorage.getItem("usuarioRegistrado"));

    if (usuarioRegistrado.correo === correoLogin && 
        usuarioRegistrado.contraseña === contraseñaLogin) {
            localStorage.setItem("nombreUsuario", usuarioRegistrado.nombre);
            window.location.href = './saludo_index.html';
        } else {
            alert("Correo o contraseña incorrectos");
        }
});