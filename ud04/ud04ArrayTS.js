var paises = ['Argentina', 'Brasil', 'Canada', 'España', 'Francia', 'Alemania'];
document.write("<h2> El n\u00FAmero de elementos del array es ".concat(tamano(paises), "<h2><br>\n    <h2> Todos los paises del array son:<h2><h3>").concat(enumData(paises), "<h3><br>\n    <h2> Todos los paises del array al rev\u00E9s son:<h2><h3>").concat(enumDataGirada(paises), "<h3>"));
document.write("<h2> Nuevo pais al pricipio del array:<h2><h3>".concat(addPaisInicioArray(paises, 'Corea del Norte'), "<h3>"));
document.write("<h2> Nuevo pais al final del array:<h2><h3>".concat(addPaisFinalArray(paises, 'China'), "<h3>"));
document.write("<h2> El elemento eliminado el principio del array fue  Corea del Norte:<h2><h3>".concat(eliminarPaisIniciorray(paises), "<h3>"));
document.write("<h2> El elemento eliminado al final del array fue China:<h2><h3>".concat(eliminarPaisFinalrray(paises), "<h3>"));
verPosicion(paises);
elementoPosicion(paises);
posicionInicioFinal(paises);
function tamano(datos) {
    return datos.length;
}
function enumData(datos) {
    return datos.join(', ');
}
function enumDataGirada(datos) {
    var datos2 = datos.slice();
    return datos2.reverse().join(', ');
}
function addPaisInicioArray(datos, pais) {
    datos.unshift(pais);
    return datos.join(', ');
}
function addPaisFinalArray(datos, pais) {
    datos.push(pais);
    return datos.join(', ');
}
function eliminarPaisIniciorray(datos) {
    datos.shift();
    return datos.join(', ');
}
function eliminarPaisFinalrray(datos) {
    datos.pop();
    return datos.join(', ');
}
function verPosicion(datos) {
    var posicion = parseInt(window.prompt("Escriba la posición del array que quiere ver:") || '');
    var data = datos.length - 1;
    if (posicion > data || isNaN(posicion)) {
        alert("El array no tiene tantos paises o la posición ingresada no es válida");
    }
    else {
        document.write("<h2> En la posici\u00F3n ".concat(posicion, " est\u00E1 el pa\u00EDs:<h2><h3>").concat(datos[posicion], "<h3>"));
    }
}
function elementoPosicion(datos) {
    var elemento = window.prompt("Escriba el elemento del array que quiere ver:");
    if (elemento) {
        var posicion2 = datos.indexOf(elemento);
        if (posicion2 !== -1) {
            document.write("<h2> El pais ".concat(elemento, " est\u00E1 en la posici\u00F3n: <h2><h3> ").concat(posicion2, "<h3> "));
        }
    }
}
function posicionInicioFinal(datos) {
    var p1 = parseInt(window.prompt("Elija la posición de incio por donde quiere ver el array:") || '');
    var p2 = parseInt(window.prompt("Elija la posición de fin por donde quiere ver el array:") || '');
    if (!isNaN(p1) && !isNaN(p2)) {
        var p12 = p1 + 1;
        var paiSlice = datos.slice(p12, p2);
        document.write("<h2>Los paises entre la posici\u00F3n ".concat(p1, " y ").concat(p2, " son: <h2><h3> ").concat(paiSlice.join(', '), "<h3> "));
    }
    else {
        alert("Por favor, ingrese posiciones válidas");
    }
}
