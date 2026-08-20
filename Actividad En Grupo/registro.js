let usuarios = JSON.parse(localStorage.setItem("usuarios")) || []
let registrar = () => {
    let nombre = document.getElementById("nombre")
    let apellido = document.getElementById("apellido")
    let cargo = document.getElementById("cargo")
    let area = document.getElementById("area")
    let correo = document.getElementById("correo")
    let pasword = document.getElementById("contraseña")
    let mensaje =  document.getElementById("mensaje")
    let nuevoUsuario={
        nombre:nombre,
        apellido:apellido,
        cargo:cargo,
        area:area,
        correo:correo,
        pasword:pasword,
        mensaje:mensaje
    }
    usuarios.push(nuevoUsuario)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    alert("Usuario Registrado")
}