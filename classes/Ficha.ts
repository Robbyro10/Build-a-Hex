  import { Nodo } from "./Nodo";
  import { Casilla } from "./Casilla";
  import { Colors } from "../CustomTypes/Colors";
  import { directions } from "../CustomTypes/Directions";

  export class Ficha extends Nodo <directions, Ficha>{
    color: Colors;
    orientation?: boolean;

    constructor(color: Colors, orientation?:boolean){
      super();
      this.color = color;
      this.orientation = orientation;
    } 

    //Only works for singular fichas
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

    //Only works for singular fichas
    flip(): void{
      if (this.orientation){
        this.orientation = false;
      }
      else{
        this.orientation = true;
      }
    }
  }

  export class FichaTriangular extends Ficha{
    

  }
