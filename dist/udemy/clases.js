"use strict";
class Vehiculo {
    constructor(marca_, fecha_, puertas_) {
        this.marca = marca_;
        this.fecha = fecha_;
        this.puertas = puertas_;
    }
    acelerar(km) {
        return "Acelerar " + km;
    }
    frenar() {
        console.log("frenar");
    }
}
const coche = new Vehiculo("xd", "54554", 7);
console.log(coche);
console.log(coche.acelerar("20 km"));
