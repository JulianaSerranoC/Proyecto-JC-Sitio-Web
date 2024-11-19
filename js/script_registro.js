document.getElementById("formulario_register").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;
    const género = document.getElementById("género").value;

    const usuario = {
        nombre: nombre,
        apellidos: apellidos,
        correo: correo,
        contraseña: contraseña,
        género: género
    };
    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario))
    window.location.href = './registro_login.html';
});