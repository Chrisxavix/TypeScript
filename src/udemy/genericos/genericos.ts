/* Función genérica: 
   Permite llamar el método con parámetros de cualquier tipo de dato */
function mostrarGenerico<T>(dato: T): T {
    return dato;
}
console.log(mostrarGenerico(1));
console.log(mostrarGenerico("Uno"));
console.log(mostrarGenerico(true));

/* Clase genérica
   Al decir que la clase es genérica permite usar tipos genéricos con atributos y funciones */
class PersonaGenerica<T> {
    nombre: string;
    edad: T;

    constructor(nombre_: string, edad_: T) {
        this.nombre = nombre_;
        this.edad = edad_;
    }
}

/* Interface genérica
   Al decir que la interface es genérica permite usar tipos genéricos con atributos y funciones */
interface InterfaceGenerica<T> {
    nombre: string;
    edad: T;

    (nombre_: string, edad_: T): void;
}
