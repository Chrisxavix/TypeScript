"use strict";
console.log("chris");
/* Funciones de retorno */
function sumar(a, b) {
    return a + b;
}
//console.log("Total: ", sumar(2, 6));
function mostrar() {
    console.log("Hola mostrar 1");
}
function mostrarParam(text) {
    return "Hola " + text;
}
const mostrar1 = () => {
    console.log("Hola mostrar 2");
};
const mostrar1Param = (text) => {
    return "Hola " + text;
};
mostrar();
console.log(mostrarParam("Dani"));
mostrar1();
console.log(mostrar1Param("Chuty"));
/* Parámetros Opcionales */
console.log("");
console.log("Parámetros Opcionales");
const opcionales = (nombre, apellido, edad) => {
    if (edad != undefined) {
        console.log(`Nombre: ${nombre}, Apellido: ${apellido}, Edad: ${edad}`);
    }
    else {
        console.log(`Nombre: ${nombre}, Apellido: ${apellido}`);
    }
};
opcionales("JNO", "MC", 7);
opcionales("SKONE", "MC");
/* Parámetros por defecto */
console.log("");
console.log("Parámetros por defecto");
const defecto = (nombre = "Dani", apellido = "MC", edad) => {
    if (edad != undefined) {
        console.log(`Nombre: ${nombre}, Apellido: ${apellido}, Edad: ${edad}`);
    }
    else {
        console.log(`Nombre: ${nombre}, Apellido: ${apellido}`);
    }
};
defecto();
defecto("Tessla");
/* Parámetros REST */
console.log("");
console.log("Parámetros REST");
const cartaPostres = (postre, ...frutas) => {
    console.log("Postre: ", postre);
    console.log("Lista de Frutas: ", frutas);
    console.log("Primera fruta: ", frutas[0]);
    frutas.forEach(fruta => {
        if (fruta == "manzana") {
            console.log("Fruta Manzana en ForEach");
        }
    });
};
cartaPostres("Helado", "manzana", "durazno", "pina");
