  import { Nodo } from "./Nodo";
  import { Casilla } from "./Casilla";

  export class Ficha extends Nodo{
    color: String;
    orientation?: boolean;

    constructor(color: String, orientation?:boolean){
      super();
      this.color = color;
      this.orientation = orientation;
    } 

    insertar (box:Casilla): void{
      if (box.orientation == this.orientation){
        box.ficha = this;
      }
    }

  }

  export class FichaTriangular extends Ficha{
    
  }
