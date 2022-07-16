
export class Puntaje {
    puntaje: number;

    constructor(puntaje: number){
        this.puntaje = puntaje;
    }

    addPoints(points:number): void {
        this.puntaje += points;
    }
}

class Calculator {

}

class Linear extends Calculator{

}