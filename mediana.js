
function esPar(numerito){
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

function calcularMediana(lista) {
    let mediana;
    mitadLista = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        mediana = (elemento1 + elemento2) / 2;
    } else {
        mediana = lista[mitadLista];
    }
    return "Resultado: " + mediana + "   mitadLista: " + mitadLista;
};