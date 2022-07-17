

export class Puntaje {
    puntaje: number;
    calculator: Calculator;

    constructor(puntaje: number, calculator: Calculator){
        this.puntaje = puntaje;
        this.calculator = calculator;
    }

    get getCalculator(): Calculator { return this.calculator; };

    addPoints(points:number, mode: number): void {
        this.puntaje += mode * points;
    }
}

class Calculator {
    
}

class Linear extends Calculator{
}
