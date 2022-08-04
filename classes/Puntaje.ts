
export class Puntaje{
    cont: number;

    constructor (cont: number){
        this.cont = cont;
    }

    changePoints(calculator: Calculator): void{
        this.cont += calculator.addPoints();
    }
        
}

export interface Calculator {

    addPoints(): number;
}


export class AddRule implements Calculator{
    addPoints(): number {
       let n = 100;
       return n; 
    }
}  