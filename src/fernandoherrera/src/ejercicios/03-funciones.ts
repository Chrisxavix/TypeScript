/* La manera correcta de declarar una función tipada */

console.log("Test");

function sumarAB(a: number, b: number): number {
    return a + b;
}

const sumarFlechaAB = (a: number, b: number): number => {
    return a + b;
}

const sumarFlechaAB2 = (a: number, b: number): number => a + b;

const multiplicarParametros = (numero: number, otroNumero?: number, base: number = 2): number => {
    return numero * base;
}

console.log(sumarAB(20, 54));
console.log(sumarFlechaAB(2, 54));
console.log(sumarFlechaAB2(2, 5));
console.log(multiplicarParametros(2, 5));


interface PersonajeSkirym {
    nombre: string;
    pv: number;
    mostrarPV: () => void;
}

function curarPersonaje(personaje: PersonajeSkirym, curarX: number): void {
    personaje.pv += curarX;
    console.log(personaje);
}

const newPersonaje: PersonajeSkirym = {
    nombre: "Flash",
    pv: 45,
    mostrarPV(){
        console.log(this.pv);
    }
}

curarPersonaje(newPersonaje, 10);
newPersonaje.mostrarPV();
