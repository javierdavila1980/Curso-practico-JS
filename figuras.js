//Código para el cuadrado:
console.group("Cuadrados:");
function perimetroCuadrado(lado) {
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();
//Código para el triángulo:
console.group("Triángulos:");
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
console.groupEnd();
// Código para el círculo:
console.group("Círculos:");
// Diámetro
function diametro(radio){
    return radio *2;
}
// PI
const PI = Math.PI;
// Circunferencia
function circunferencia(radio){
    return diametro(radio) * PI
}
// Área
function areaCirculo(radio){
    return (radio * radio) * PI
}
console.groupEnd();

// Interactuando con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}


