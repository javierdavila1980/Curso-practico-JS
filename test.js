
let listado1 = [
    9,2,3,4,2,2,2,3,4,1,1
];

let listado2 = listado1.sort()

console.log(
    "Array Original: " + listado1 , 
    "\nArray Ordenado: " + listado2 , 
    "\nÚltimo elemento de AOriginal: " + listado1[listado1.length - 1]
);

// const arrayOrdenado = listado1.sort(
//     function(elementoA , elementoB) {
//         return elementoA - elementoB;
//     }
// )