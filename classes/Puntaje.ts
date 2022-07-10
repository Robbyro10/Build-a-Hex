
export class Puntaje {
    puntaje: number;

    constructor(puntaje: number){
        this.puntaje = puntaje;
    } 

    addPoints(): void {
        this.puntaje += 100;
    }
}