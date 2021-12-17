"use strict";
/* La manera correcta de declarar una función tipada */
console.log("Test");
function sumarAB(a, b) {
    return a + b;
}
const sumarFlechaAB = (a, b) => {
    return a + b;
};
const sumarFlechaAB2 = (a, b) => a + b;
const multiplicarParametros = (numero, otroNumero, base = 2) => {
    return numero * base;
};
console.log(sumarAB(20, 54));
console.log(sumarFlechaAB(2, 54));
console.log(sumarFlechaAB2(2, 5));
console.log(multiplicarParametros(2, 5));
function curarPersonaje(personaje, curarX) {
    personaje.pv += curarX;
    console.log(personaje);
}
const newPersonaje = {
    nombre: "Flash",
    pv: 45,
    mostrarPV() {
        console.log(this.pv);
    }
};
curarPersonaje(newPersonaje, 10);
newPersonaje.mostrarPV();
