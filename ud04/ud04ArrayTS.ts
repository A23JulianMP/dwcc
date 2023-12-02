
  const paises: string[] = ['Argentina', 'Brasil', 'Canada', 'España', 'Francia', 'Alemania'];
  document.write(`<h2> El número de elementos del array es ${tamano(paises)}<\h2><br>
    <h2> Todos los paises del array son:<\h2><h3>${enumData(paises)}<\h3><br>
    <h2> Todos los paises del array al revés son:<\h2><h3>${enumDataGirada(paises)}<\h3>`);
  document.write(`<h2> Nuevo pais al pricipio del array:<\h2><h3>${addPaisInicioArray(paises, 'Corea del Norte')}<\h3>`);
  document.write(`<h2> Nuevo pais al final del array:<\h2><h3>${addPaisFinalArray(paises, 'China')}<\h3>`);
  document.write(`<h2> El elemento eliminado el principio del array fue  Corea del Norte:<\h2><h3>${eliminarPaisIniciorray(paises)}<\h3>`);
  document.write(`<h2> El elemento eliminado al final del array fue China:<\h2><h3>${eliminarPaisFinalrray(paises)}<\h3>`);
  verPosicion(paises);
  elementoPosicion(paises);
  posicionInicioFinal(paises);

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

  function eliminarPaisIniciorray(datos: any[]): string {
    datos.shift();
    return datos.join(', ');
  }

  function eliminarPaisFinalrray(datos: any[]): string {
    datos.pop();
    return datos.join(', ');
  }

  function verPosicion(datos: any[]): void {
    const posicion: number = parseInt(window.prompt("Escriba la posición del array que quiere ver:") || '');
    const data: number = datos.length - 1;
    if (posicion > data || isNaN(posicion)) {
      alert("El array no tiene tantos paises o la posición ingresada no es válida");
    } else {
      document.write(`<h2> En la posición ${posicion} está el país:<\h2><h3>${datos[posicion]}<\h3>`);
    }
  }

  function elementoPosicion(datos: any[]): void {
    const elemento: string | null = window.prompt("Escriba el elemento del array que quiere ver:");
    if (elemento) {
      const posicion2: number = datos.indexOf(elemento);
      if (posicion2 !== -1) {
        document.write(`<h2> El pais ${elemento} está en la posición: <\h2><h3> ${posicion2}<\h3> `);
      }
    }
  }

  function posicionInicioFinal(datos: any[]): void {
    const p1: number = parseInt(window.prompt("Elija la posición de incio por donde quiere ver el array:") || '');
    const p2: number = parseInt(window.prompt("Elija la posición de fin por donde quiere ver el array:") || '');
    if (!isNaN(p1) && !isNaN(p2)) {
      const p12: number = p1 + 1;
      const paiSlice: any[] = datos.slice(p12, p2);
      document.write(`<h2>Los paises entre la posición ${p1} y ${p2} son: <\h2><h3> ${paiSlice.join(', ')}<\h3> `);
    } else {
      alert("Por favor, ingrese posiciones válidas");
    }
  }
