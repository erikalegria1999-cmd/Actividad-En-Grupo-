let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
let registrar = () => {
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value 
    let cargo = document.getElementById("cargo").value 
    let area = document.getElementById("area").value
    let correo = document.getElementById("correo").value
    let pasword = document.getElementById("password").value
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
    
    alert("¡Empleado registrado con éxito!")
    mensaje.style.color = "green";
    mensaje.textContent = "Empleado registrado con éxito. Redirigiendo...";
    
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("cargo").value = "";
    document.getElementById("area").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("contrasena").value = "";
}