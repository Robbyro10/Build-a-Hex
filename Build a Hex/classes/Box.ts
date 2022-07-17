
import { Ficha } from "./Token";
import { Nodo } from "./Nodo";

export class Box extends Nodo{
    ficha?: Ficha;
    id: number;
  
    constructor (id:number, ficha?: Ficha){
      super();
      this.id = id;
      this.ficha = ficha;
    }
  }

  export class Casilla extends Box {
  
  }