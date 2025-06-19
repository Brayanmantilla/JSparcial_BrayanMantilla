
let usuarios = JSON.parse(localStorage.getItem('usuarios'))||[];
let usuarioActivo = null;
let tareas = [];

function guardarUsuario(){
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}

function registrar(){
    const usuario = document.getElementById("usuario").value.trim();
    const contrasena = document.getElementById("contrasena").value.trim();
    const correo = document.getElementById("correo").value.trim();

    if (!usuario || !contrasena || !correo){
        mostrarMensaje("Todos los campos deben ser obligatorios");
        alert("!!! ERROR !!!");
        return;
    }
    else if (usuarios.find(u=>u.usuario === usuario)){
        mostrarMensaje("Usuario ya existe")
        return; 
    }
    usuarios.push({usuario, contrasena, correo})
    guardarUsuario();
    mostrarMensaje("Usuario registrado EXITOSAMENTE");
}

function iniciarSesion(){
    const usuario = document.getElementById("usuario").value.trim()
    const contrasena = document.getElementById("contrasena").value.trim()
    const correo = document.getElementById("correo").value.trim()

    const verificacion = usuarios.find(i => i.correo === correo && i.contrasena === contrasena)

    if (!verificacion){
        mostrarMensaje("Usuario ingresado es INCORRECTO");
        alert("!!! ERROR !!!");
        return;
    } else{
        window.location.href="index2.html"
    }
    usuarioActivo=verificacion;
}
function mostrarMensaje (msg){
    document.getElementById('mensaje').textContent=msg;
}
