  import { Nodo } from "./Nodo";

  export class Ficha extends Nodo{
    color: String;

    constructor(color: String){
      super();
      this.color = color;
    } 
  }

  export class FichaTriangular extends Ficha{

  }
