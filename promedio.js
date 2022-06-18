
function calcularMediaAritmetica(lista) {
    //alert("Promedio");
    //let sumaLista = 0;

    // una forma de usar el for:
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    // otra forma de interactuar con array (Aplicando metodos de array "reduce"):
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}
