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
  const nif = document.getElementById("nif").value;
  const email = document.getElementById("email").value;
  const prov = document.getElementById("provincia").value;
  const fecha = document.getElementById("fecha").value;
  const tel = document.getElementById("telefono").value;
  const hora = document.getElementById("hora").value;

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
  const nifRegex = /^\d{8}-[a-zA-Z]$/;
  //Explicación expresión regular
  // ^: Coincide con el inicio de la cadena.
  // \d{8}: Coincide con exactamente 8 dígitos.
  // -: Coincide con un guión.
  // [a-zA-Z]: Coincide con una letra, tanto mayúscula como minúscula.
  // $: Coincide con el final de la cadena.
  if (!nifRegex.test(nif)) {
    mostrarError(
      "Formato de NIF incorrecto. Debe ser 8 números, un guión y una letra.",
      "nif"
    );
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //Explicación expresión regular
  // ^: Coincide con el inicio de la cadena.
  // [^\s@]+: Coincide con uno o más caracteres que no son espacios en blanco ni el símbolo "@".
  // @: Coincide con el símbolo "@".
  // [^\s@]+: Coincide con uno o más caracteres que no son espacios en blanco ni el símbolo "@" después del símbolo "@".
  // \.: Coincide con un punto (necesario para el dominio).
  // [^\s@]+: Coincide con uno o más caracteres que no son espacios en blanco ni el símbolo "@" después del punto.
  // $: Coincide con el final de la cadena.
  if (!emailRegex.test(email)) {
    mostrarError(
      "Formato de E-MAIL incorrecto. Debe seguir un formato válido.",
      "email"
    );
    return false;
  }

  if (prov.trim() === "0") {
    mostrarError("Tiene que elegir una provincia", "provincia");
    return false;
  }

  const fechaRegex =
    /^(0[1-9]|[1-2][0-9]|3[0-1])[-\/](0[1-9]|1[0-2])[-\/]\d{4}$/;

  //Explicación expresión regular
  //^: Coincide con el inicio de la cadena.
  //(0[1-9]|[1-2][0-9]|3[0-1]): Coincide con el día en formato dd, permitiendo días del 01 al 31.
  //[-\/]: Coincide con un guión o una barra, que separan la parte del día de la parte del mes.
  //(0[1-9]|1[0-2]): Coincide con el mes en formato mm, permitiendo meses del 01 al 12.
  //[-\/]: Coincide con un guión o una barra, que separan la parte del mes de la parte del año.
  //\d{4}: Coincide con el año en formato aaaa, permitiendo cualquier combinación de cuatro dígitos.
  //$: Coincide con el final de la cadena.

  if (!fechaRegex.test(fecha)) {
    mostrarError("Formato de fecha debe ser dd/mm/aaaa o dd-mm-aaaa", "fecha");
    return false;
  }

  const telRegex = /^\d{9}$/;

  //Explicación expresión regular
  //^: Coincide con el inicio de la cadena.
  //\d{9}: Coincide formato de 9 dígitos.
  //$: Coincide con el final de la cadena.
  if (!telRegex.test(tel)) {
    mostrarError("Formato de teléfono debe tener 9 dígitos", "telefono");
    return false;
  }

  const horRegex = /^(0[0-9]|1[0-9]|2[0-4])\:([0-5][0-9])$/;

  //Explicación expresión regular
  //^: Coincide con el inicio de la cadena.
  //(0[0-9]|1[0-9]|2[0-4]): Coincide formato de hora de 00 a 24 h
  //\: Coincide con los : de la hora
  //([0-5][0-9]) Coincide con los minutos de 00-59
  //$: Coincide con el final de la cadena.
  if (!horRegex.test(hora)) {
    mostrarError("Formato de hora debe ser hh:mm", "hora");
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
  const confirmacion = window.confirm(
    "¿Estás seguro de que deseas enviar el formulario?"
  );
  return confirmacion;
}
