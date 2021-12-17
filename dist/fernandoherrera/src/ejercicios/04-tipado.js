"use strict";
const superHeroe = {
    nombre: 'Spider',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
};
console.log(superHeroe);
console.log(superHeroe.mostrarDireccion());
