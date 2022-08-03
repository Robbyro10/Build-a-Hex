  import { Nodo } from "./Nodo";
  import { Casilla, CasillaTriangular } from "./Casilla";
  import { Colors } from "../CustomTypes/Colors";
  import { directions } from "../CustomTypes/Directions";

  export class Ficha<D> extends Nodo <D, Ficha<D>>{
    color: Colors;
    orientation?: boolean;

    constructor(color: Colors, orientation?:boolean){
      super();
      this.color = color;
      this.orientation = orientation;
    } 
    
    insertar(casilla: Casilla<D>): void{
      casilla.ficha = this;
    }

    //For singular fichas
    flip(): void{
      if (this.orientation){
        this.orientation = false;
      }
      else{
        this.orientation = true;
      }
    }
  }
  
  export class FichaTriangular extends Ficha<directions>{


  }
