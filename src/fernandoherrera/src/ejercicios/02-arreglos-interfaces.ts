/*
===== Código de TypeScript =====
*/

let skills: string[] = ["1", "true"];
skills.push("Dani");
console.log(skills);

/* Interfaces para tipar */
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string
}

const personaje: Personaje = {
    nombre: "Chris",
    hp: 78,
    habilidades: ["runner", "writer"],
    puebloNatal: "Lima"
}

console.log(personaje);
