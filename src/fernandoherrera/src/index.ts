/* Evita tener que declarar valores y luego recibir
por parámetros */

class Heroe {
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string,
    ) {}
}

const hero = new Heroe("Spider", 45, "Revelation");
console.log(hero);
