
export class Puntaje {
    puntaje: number;

    constructor(puntaje: number){
        this.puntaje = puntaje;
    } 

    addPoints(): number {
        this.puntaje += 100;
        return this.puntaje;
    }
}