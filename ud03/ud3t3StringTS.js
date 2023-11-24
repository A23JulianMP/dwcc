var nomeApelido = window.prompt("Escriba o seu nome e apelidos");
var separtadoNombreApelido = nomeApelido.split(" ");
document.getElementById('data').innerHTML += "<br><br>El tama\u00F1o total de su nombre y apellidos es: ".concat(nomeApelido.length, " ");
document.getElementById('data').innerHTML += "<br><br>Su nombre tiene una longitud de: ".concat(separtadoNombreApelido[0].length, " \n.Su 1\u00BA apellido: ").concat(separtadoNombreApelido[1].length, "  y su 2\u00BA segundo apellido de: ").concat(separtadoNombreApelido[2].length, " ");
document.getElementById('data').innerHTML += "<br><br>Su nombre y apellidos en min\u00FAsculas: ".concat(nomeApelido.toLowerCase(), " ");
document.getElementById('data').innerHTML += "<br><br>Su nombre y apellidos en may\u00FAsculas: ".concat(nomeApelido.toUpperCase(), " ");
document.getElementById('data').innerHTML += "<br>Su nombre es:".concat(separtadoNombreApelido[0], " <br> su 1\u00BA apellido es:").concat(separtadoNombreApelido[1], " <br> \ny su 2\u00BA apellido es ").concat(separtadoNombreApelido[2], " ");
document.getElementById('data').innerHTML += "<br><br>A proposta de nome \u00E9: ".concat(separtadoNombreApelido[0].toLocaleLowerCase()).concat(separtadoNombreApelido[1][0].toLocaleUpperCase()).concat(separtadoNombreApelido[2][0].toLocaleUpperCase());
// Engada unha contrasinal
var contra = window.prompt("Escriba unha contrasinal");
var contieneMayusculaMinusculaNumero = /[A-Za-z0-9]/.test(contra);
var contieneEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(contra);
if (!(contra.length >= 8 && contra.length <= 16)) {
    document.getElementById('data').innerHTML += "<br><br>La contrase\u00F1a tiene que tener entre 8 y 16 caracteres";
}
else if (!(contieneMayusculaMinusculaNumero && contieneEspecial)) {
    document.getElementById('data').innerHTML += "<br><br>La contrase\u00F1a tiene que tener alguna may\u00FAscua, min\u00FAscula, n\u00FAmero y caracter especial";
}
else {
    document.getElementById('data').innerHTML += "<br><br>La contrase\u00F1a introducida cumple todos los requisitos";
}
