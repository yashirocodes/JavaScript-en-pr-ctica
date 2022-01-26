//Llamamos primero a nuestro formulario y lo guardamos en una variable
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");

const errorNombre = document.querySelector(".errorNombre");
const errorAsunto = document.querySelector(".errorAsunto");
const errorMensaje = document.querySelector(".errorMensaje");
const resultado = document.querySelector(".resultado");

//Lamaremos al form y le daremos un evento .
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
    //reset 
  errorNombre.innerHTML = ""

  const regExpLetras = /[a-zA-Z]\w+/gi;

  if (!nombre.value.trim()) {
    errorNombre.innerHTML = "Mensaje en blanco";
    return;
  }
  if (!regExpLetras.test(nombre.value)) {
    errorNombre.innerHTML = "Solo se permiten letras";
    return;
  }

  if (!asunto.value.trim()) {
    errorAsunto.innerHTML = "Asunto es requerido";
    return;
  }
  
  if (!mensaje.value.trim()) {
    errorMensaje.innerHTML = "Mensaje es requerido";
    return;
  }

  resultado.innerHTML = "El mensaje fue enviado con exito"
});


