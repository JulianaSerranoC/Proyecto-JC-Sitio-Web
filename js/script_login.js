document.getElementById("formulario_login").addEventListener("submit", function (event) {
    event.preventDefault();

    const correoLogin = document.getElementById("correoLogin").value; 
    const contraseñaLogin = document.getElementById("contraseñaLogin").value;

    const usuarioRegistrado = JSON.parse(localStorage.getItem("usuarioRegistrado"));

    if (usuarioRegistrado && usuarioRegistrado.correo === correoLogin && 
        usuarioRegistrado.contraseña === contraseñaLogin) {
            localStorage.setItem("nombresUsuario", usuarioRegistrado.nombres);
            window.location.href = "saludo_index.html";
        } else {
            alert("Correo o contraseña incorrectos");
        }
});