  import { Nodo } from "./Nodo";
  import { Casilla } from "./Casilla";

  export class Ficha extends Nodo{
    color: String;

    constructor(color: String){
      super();
      this.color = color;
    } 

    insertar (box:Casilla): void{
      box.ficha = this;
    }

  }

  export class FichaTriangular extends Ficha{
    orientation: boolean;

    constructor(color: String, orientation: boolean){
      super(color);
      this.orientation = orientation;
    }
  }
