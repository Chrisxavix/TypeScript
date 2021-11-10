import { Padre } from "./padre"
class Hijo extends Padre {
    public apellido: string;
    
    public constructor(nombre_: string, edad_: number, nickname_: string, apellido_: string){
        /* super llama al constructor de la clase padre */
        super(nombre_, edad_, nickname_);
        this.apellido = apellido_;
    }

    public mostrarNombreHijo(): void {
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

