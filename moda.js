
function calcularModa(lista){
    // creando un objeto a partir del array
    const objetoListaCount = {};

    // recorrer array con .map
    lista.map(
        function(elemento) {
            if (objetoListaCount[elemento]) {
                objetoListaCount[elemento] += 1;
            } else {
                objetoListaCount[elemento] = 1;
            }
        }
    );

    // convertimos el objeto a un array
    const lista1Array = Object.entries(objetoListaCount).sort(
        function (valorAcumulado , nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1];
        }     
    );
    //return lista1Array;

    const moda = lista1Array[lista1Array.length - 1];
    return moda;

    //const arrayPrueba = ['algo', 12, 1];
    //return arrayPrueba;
}

