function cargarDatos(usuario) {
    let nombreUsuario = document.getElementById("nombreUsuario");
    nombreUsuario.textContent = usuario.nombre + " " + usuario.apellido;
    let cargoUsuario = document.getElementById("cargoUsuario");
        cargoUsuario.textContent = usuario.cargo;
    let areaUsuario = document.getElementById("areaUsuario");
    areaUsuario.textContent = usuario.area;
}
function mostrarPanel(cargo) {
    if (cargo === "Gerente") {
        document.getElementById("panelGerente").style.display = "block";
    } else if (cargo === "Supervisor") {
        document.getElementById("panelSupervisor").style.display = "block";
    } else if (cargo === "Empleado") {
        document.getElementById("panelEmpleado").style.display = "block";
    }
}
function iniciarSesion() {
    let correo = document.getElementById("correo").value;
    let contrasena = document.getElementById("contrasena").value;
    let mensaje = document.getElementById("mensaje");

    let usuarios = JSON.parse(localStorage.getItem("usuarios"));

    if (usuarios == null) {
        mensaje.textContent = "No hay ningún usuario registrado";
        return;
    }
    let usuarioEncontrado = null;
    for (let i = 0; i < usuarios.length; i++) {
        let u = usuarios[i];
        if (u.correo == correo) {
            if (u.pasword == contrasena) {
                usuarioEncontrado = u;
            }
        }
    }
    if (usuarioEncontrado != null) {

        localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioEncontrado));

        document.getElementById("vistaLogin").style.display = "none";
        document.getElementById("vistaDashboard").style.display = "block";

        cargarDatos(usuarioEncontrado);
        mostrarPanel(usuarioEncontrado.cargo);
    } else {
        mensaje.textContent = "Correo o contraseña incorrectos";
    }
}
function cerrarSesion() {
    localStorage.removeItem("usuarioLogueado");

    document.getElementById("vistaDashboard").style.display = "none";
    document.getElementById("vistaLogin").style.display = "block";
}