"use strict";
/* Evita tener que declarar valores y luego recibir
por parámetros
constructor(
        public nombre: string,
        public direccion: string
    ) {}
*/
class PersonaNormal {
    constructor(nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
    }
}
class Heroe extends PersonaNormal {
    constructor(alterEgo, edad, nombreReal) {
        super(nombreReal, "New York");
        this.alterEgo = alterEgo;
        this.edad = edad;
        this.nombreReal = nombreReal;
    }
}
const hero = new Heroe("Spider", 45, "Revelation");
console.log(hero);
