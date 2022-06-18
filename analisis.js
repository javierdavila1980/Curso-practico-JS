
function esPar(numero){
    return (numero % 2 === 0);
};

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        mediana = (personaMitad1 + personaMitad2)/2;
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
};

const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

console.log(
    "Array Original: " + salariosCol  
);

// Ordenar el array
const salariosColOrdenado = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

console.log(
    "Array Ordenado: " + salariosColOrdenado ,
    "\nMediana General: " + medianaSalarios(salariosColOrdenado)
);

// Obtener mediana del 10% de mejores salarios
// metodo splice 
const spliceInicio = (salariosColOrdenado.length * 80) / 100;
const spliceFin = salariosColOrdenado.length - spliceInicio;

const salariosTop10Col = salariosColOrdenado.splice(spliceInicio, spliceFin);



console.log(
    "\nMediana Top 10: " + medianaSalarios(salariosTop10Col) ,
    "\nTop 10 salarios: " + salariosTop10Col
);



// Nota: esto si funciona, ¿no hay necesidad de crear un nuevo array ordenado
// salariosCol.sort(
//     function (a,b) {
//         return a - b;
//     }
// );

