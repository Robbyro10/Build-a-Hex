
  export class Ficha{
    color: String;
    vecinos: Array<Ficha> = new Array<Ficha>();

    constructor(color: String){
      this.color = color;
    } 

    add(ficha: Ficha): void {
      this.vecinos.push(ficha);
    }
  }
