class Vehiculo {
    marca: string;
    fecha: string;
    puertas: number;

    constructor(marca_: string, fecha_: string, puertas_: number) {
        this.marca = marca_;
        this.fecha = fecha_;
        this.puertas = puertas_;
    }

    acelerar(km: string): string {
        return "Acelerar " + km;
    }

    frenar(): void {
        console.log("frenar");
    }
}

const coche = new Vehiculo("xd", "54554", 7);
console.log(coche);
console.log(coche.acelerar("20 km"));

