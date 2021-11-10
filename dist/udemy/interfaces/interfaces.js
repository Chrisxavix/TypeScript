"use strict";
function caminar(persona) {
    console.log("La persona se llama: " + persona.nombre);
}
function edad(persona) {
    console.log("La persona tiene la edad de: " + persona.edad);
}
/* Al no declarar de tipo Persona me permite agregar más valores */
let persona1 = {
    nombre: "Chris",
    apellido: "Free",
    edad: 7,
    altura: 2
};
/* Al declarar de tipo Persona solo usará sus valores declarados */
/* let persona2: Persona = {
    nombre: "Chris",
    apellido: "Free",
    edad: 7,
    altura: 2
}; */
console.log("Introducción");
caminar(persona1);
edad(persona1);
console.log("");
console.log("Opcionales");
let usuario = {
    apellido: "Free",
    edad: 7
};
console.log(usuario.apellido);
console.log("");
console.log("Solo lectura");
let person = {
    nombre: "Chris",
    apellido: "Free",
    edad: 7
};
console.log(person);
/* Cambio el nombre de un atributo de la interface,
al tener readonly no permite cambiar */
/* person.nombre = "Tessla";
console.log(person); */
console.log("");
console.log("Interfaces para funciones");
let general = function (nombre, apellido, edad) {
    console.log(`${nombre}, ${apellido}, ${edad}`);
};
general("Steve", "MC", 78);
