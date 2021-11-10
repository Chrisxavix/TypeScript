export class Padre {
    nombre: string;
    edad: number;
    private nickname: string;

    public constructor(nombre_: string, edad_: number, nickname_: string){
        this.nombre = nombre_;
        this.edad = edad_;
        this.nickname = nickname_;
    }

    public caminar(): void {
      console.log("Va a caminar " + this.nombre);
    }

    set setNickname(nickname_: string){
        this.nickname = nickname_;
    }

    get getNickname(): string {
        return this.nickname;
    }
}