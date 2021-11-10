"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const padre_1 = require("./padre");
class Hijo extends padre_1.Padre {
    constructor(nombre_, edad_, nickname_, apellido_) {
        /* super llama al constructor de la clase padre */
        super(nombre_, edad_, nickname_);
        this.apellido = apellido_;
    }
    mostrarNombreHijo() {
        console.log("Nombre del hijo: " + this.nombre);
    }
}
/* Pide tres parámetros la clase de Hijo por el constructor que recibe tres,
   usando super(), que llama al constructor de Padre */
const hijo1 = new Hijo("Dani", 15, "Mc", "free");
console.log(hijo1);
hijo1.mostrarNombreHijo();
hijo1.caminar();
console.log(hijo1.getNickname);
console.log("Cambiando el apellido");
hijo1.setNickname = "Apellido Nuevo";
console.log(hijo1);
console.log(hijo1.getNickname);
