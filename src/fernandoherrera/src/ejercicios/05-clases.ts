/* Evita tener que declarar valores y luego recibir
por parámetros 
constructor(
        public nombre: string,
        public direccion: string
    ) {}
*/

class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) {}
}

class Heroe extends PersonaNormal {
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super(nombreReal, "New York");
    }
}

const hero = new Heroe("Spider", 45, "Revelation");
console.log(hero);
