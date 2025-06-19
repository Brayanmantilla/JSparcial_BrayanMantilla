
let actividades = [];

function cerrarSesion() {
    window.location.href = "index.html"
}

function fechaHoy() {
    const fecha = Date
    document.getElementById("fecha").textContent = fecha;
}

function agregar() {
    document.getElementById("formulario").style.display="block"
}

function guardar(){
    const date= document.getElementById("date").value
    const titulo= document.getElementById("titulo").value
    const descripcion= document.getElementById("descripcion").value
    const ubicacion= document.getElementById("ubicacion").value
    const horaInicio= document.getElementById("horaInicio").value
    const horaFIn= document.getElementById("horaFin").value


    if (!titulo || !date || !descripcion || !ubicacion || !horaInicio || !horaFin){
    alert("Ingrese todos los datos necesarios")

}

actividades.push({date, titulo, descripcion, ubicacion, horaInicio, horaFin})
}

function mostrarActividad(){
    const actividad = document.getElementById("actividad");
    actividad.innerHTML="";
    actividades.forEach(i=>{
        const li = document.createElement("li");
        li.textContent=i;
        actividad.appendChild(li)
    })

    if (actividad == null) {
    document.getElementById("lista").textContent = "NO TIENES NADA PROGRAMADO"
}
}
