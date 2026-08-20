const iniciarSesion = () => {
    let correo = document.getElementById("correo");
    let contrasena = document.getElementById("contrasena");
    let mensaje = document.getElementById("mensaje");
    let vCorreo = correo.value;
    let vContrasena = contrasena.value;
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    
    if (usuario == null) {
        mensaje.textContent = "No hay ningún usuario registrado";
        return;
    }

    if (vCorreo == usuario.correo) {
        if (vContrasena == usuario.contrasena) {
            mensaje.textContent = "Inicio de sesión correcto";
            localStorage.setItem(
                "usuarioLogueado",
                JSON.stringify(usuario)
            );
        } else {
            mensaje.textContent = "Contraseña incorrecta";
        }
    } else {
        mensaje.textContent = "Correo incorrecto";
    }
};

document.getElementById("loginForm").addEventListener("submit", function(evento) {
    evento.preventDefault();
    iniciarSesion();
});