
  import { Nodo } from "./Nodo";

  export class Ficha extends Nodo{
    color: String;
    vecinos: Array<Ficha> = new Array<Ficha>();

    constructor(color: String){
      super();
      this.color = color;
    } 
  }