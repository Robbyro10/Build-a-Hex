
import { directions } from "../CustomTypes/Directions";
import { Ficha, FichaTriangular } from "./Ficha";
import { Nodo } from "./Nodo";

export class Casilla extends Nodo <directions, Casilla> {
    ficha?: Ficha;
    id: number;
    orientation?: boolean;
    
    constructor (id:number, orientation?: boolean, ficha?: Ficha){
      super();
      this.id = id;
      this.orientation = orientation;
      this.ficha = ficha;
    }
    
    removeFicha (): void{
      this.ficha = undefined;
    }
  }

  export class CasillaTriangular extends Casilla {
    
  }
