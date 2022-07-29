  import { Nodo } from "./Nodo";
  import { Casilla } from "./Casilla";
  import { Colors } from "../CustomTypes/Colors";
  import { directions } from "../CustomTypes/Directions";

  export abstract class Ficha extends Nodo <directions, Ficha>{
    color: Colors;
    orientation?: boolean;

    constructor(color: Colors, orientation?:boolean){
      super();
      this.color = color;
      this.orientation = orientation;
    } 

    insertar (box:Casilla): void{
      if (!box.ficha){
        if (box.orientation == this.orientation){
          box.ficha = this;
        }else {
          console.log("Ficha insertion failed due to incompatible Ficha and Casilla orientation.");
        }
      }else{
        console.log("Ficha insertion failed due to Casilla begin ocuppied.");
      }
    }
  }

  export class FichaTriangular extends Ficha{
    

  }
