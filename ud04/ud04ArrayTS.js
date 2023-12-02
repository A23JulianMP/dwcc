var paises = ['Argentina', 'Brasil', 'Canada', 'España', 'Francia', 'Alemania'];
document.write("<h2> El n\u00FAmero de elementos del array es ".concat(tamano(paises), "<h2><br>\n    <h2> Todos los paises del array son:<h2><h3>").concat(enumData(paises), "<h3><br>\n    <h2> Todos los paises del array al rev\u00E9s son:<h2><h3>").concat(enumDataGirada(paises), "<h3>"));
document.write("<h2> Nuevo pais al pricipio del array:<h2><h3>".concat(addPaisInicioArray(paises, 'Corea del Norte'), "<h3>"));
document.write("<h2> Nuevo pais al final del array:<h2><h3>".concat(addPaisFinalArray(paises, 'China'), "<h3>"));
//document.write(`<h2> El elemento eliminado el principio del array fue  Corea del Norte:<\h2><h3>${eliminarPaisIniciorray(paises)}<\h3>`);
//document.write(`<h2> El elemento eliminado al final del array fue China:<\h2><h3>${eliminarPaisFinalrray(paises)}<\h3>`);
//verPosicion(paises);
//elementoPosicion(paises);
//posicionInicioFinal(paises);
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
