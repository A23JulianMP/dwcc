
  const paises: string[] = ['Argentina', 'Brasil', 'Canada', 'España', 'Francia', 'Alemania'];
  document.write(`<h2> El número de elementos del array es ${tamano(paises)}<\h2><br>
    <h2> Todos los paises del array son:<\h2><h3>${enumData(paises)}<\h3><br>
    <h2> Todos los paises del array al revés son:<\h2><h3>${enumDataGirada(paises)}<\h3>`);
  document.write(`<h2> Nuevo pais al pricipio del array:<\h2><h3>${addPaisInicioArray(paises, 'Corea del Norte')}<\h3>`);
  document.write(`<h2> Nuevo pais al final del array:<\h2><h3>${addPaisFinalArray(paises, 'China')}<\h3>`);
  //document.write(`<h2> El elemento eliminado el principio del array fue  Corea del Norte:<\h2><h3>${eliminarPaisIniciorray(paises)}<\h3>`);
  //document.write(`<h2> El elemento eliminado al final del array fue China:<\h2><h3>${eliminarPaisFinalrray(paises)}<\h3>`);
  //verPosicion(paises);
  //elementoPosicion(paises);
  //posicionInicioFinal(paises);

  function tamano(datos: any[]): number {
    return datos.length;
  }

  function enumData(datos: any[]): string {
    return datos.join(', ');
  }

  function enumDataGirada(datos: any[]): string {
    const datos2: any[] = datos.slice();
    return datos2.reverse().join(', ');
  }

  function addPaisInicioArray(datos: any[], pais: string): string {
    datos.unshift(pais);
    return datos.join(', ');
  }

  function addPaisFinalArray(datos: any[], pais: string): string {
    datos.push(pais);
    return datos.join(', ');
  }

