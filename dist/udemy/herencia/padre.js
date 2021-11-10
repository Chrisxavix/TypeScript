"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Padre = void 0;
class Padre {
    constructor(nombre_, edad_, nickname_) {
        this.nombre = nombre_;
        this.edad = edad_;
        this.nickname = nickname_;
    }
    caminar() {
        console.log("Va a caminar " + this.nombre);
    }
    set setNickname(nickname_) {
        this.nickname = nickname_;
    }
    get getNickname() {
        return this.nickname;
    }
}
exports.Padre = Padre;
