"use strict";
/* Función genérica:
   Permite llamar el método con parámetros de cualquier tipo de dato */
function mostrarGenerico(dato) {
    return dato;
}
console.log(mostrarGenerico(1));
console.log(mostrarGenerico("Uno"));
console.log(mostrarGenerico(true));
/* Clase genérica
   Al decir que la clase es genérica permite usar tipos genéricos con atributos y funciones */
class PersonaGenerica {
    constructor(nombre_, edad_) {
        this.nombre = nombre_;
        this.edad = edad_;
    }
}
