// Inicializar el contador al cargar la página
let contadorEnvios = obtenerContadorDesdeCookie() || 0;
const intentosElement = document.getElementById("intentos");
if (intentosElement) {
  intentosElement.innerText = contadorEnvios;
}
// Función para incrementar el contador y almacenar la cookie
function incrementarContador() {
  contadorEnvios++;
  document.getElementById("intentos").innerText = contadorEnvios;

  // Llamar a la función para almacenar la cookie
  almacenarCookie();
  return true;
}

// Función para obtener el contador desde la cookie
function obtenerContadorDesdeCookie() {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [nombre, valor] = cookie.trim().split("=");
    if (nombre === "contadorEnvios") {
      return parseInt(valor) || 0;
    }
  }
  return 0;
}

// Función para almacenar la cookie
function almacenarCookie() {
  const diasExpiracion = 365;
  const fechaExpiracion = new Date();
  fechaExpiracion.setTime(
    fechaExpiracion.getTime() + diasExpiracion * 24 * 60 * 60 * 1000
  );
  const cadenaFechaExpiracion = `expires=${fechaExpiracion.toUTCString()}`;
  const cookieValue = `contadorEnvios=${contadorEnvios}; ${cadenaFechaExpiracion}; path=/`;
  document.cookie = cookieValue;
}

function convertirAMayusculas(input) {
  input.value = input.value.toUpperCase();
}

function validarCampos() {
  const nombre = document.getElementById("nombre").value;
  const apellidos = document.getElementById("apellidos").value;
  const edad = document.getElementById("edad").value;

  if (nombre.trim() === "") {
    mostrarError("Nombre no puede estar vacío.", "nombre");
    return false;
  }

  if (apellidos.trim() === "") {
    mostrarError("Apellidos no pueden estar vacíos.", "apellidos");
    return false;
  }
  if (isNaN(edad) || edad < 0 || edad > 105 || edad.trim() === "") {
    mostrarError("La EDAD debe ser un número entre 0 y 105.", "edad");
    return false;
  }

  mostrarError(null, "apellidos");
  return true;
}

// Función para mostrar errores
function mostrarError(mensaje, campo) {
  if (mensaje) {
    document.getElementById("errores").innerText = mensaje;
    document.getElementById(campo).focus();
  } else {
    document.getElementById("errores").innerText = "";
  }
}

function confirmarEnvio() {
  const confirmacion = window.confirm("¿Estás seguro de que deseas enviar el formulario?");
  return confirmacion;
}
