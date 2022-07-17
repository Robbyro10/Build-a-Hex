  import { Nodo } from "./Nodo";

  export class Token extends Nodo{
    color: String;

    constructor(color: String){
      super();
      this.color = color;
    } 
  }

  export class Ficha extends Token{

  }
