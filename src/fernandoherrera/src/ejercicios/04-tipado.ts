 interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: DireccionHeroe;
    mostrarDireccion: () => string
 }

 interface DireccionHeroe {
     calle: string;
     pais: string;
     ciudad: string;
 }

 const superHeroe: SuperHeroe = {
    nombre: 'Spider',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais
    }
 }

 console.log(superHeroe);
 console.log(superHeroe.mostrarDireccion());
 