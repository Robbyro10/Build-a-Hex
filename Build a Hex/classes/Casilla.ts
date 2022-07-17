
import { Ficha } from "./Ficha";
import { Nodo } from "./Nodo";

export class Casilla extends Nodo{
    ficha?: Ficha;
    id: number;
  
    constructor (id:number, ficha?: Ficha){
      super();
      this.id = id;
      this.ficha = ficha;
    }
  }

  export class Triangular extends Casilla {
  
  }