
import { directions } from "../CustomTypes/Directions";
import { Ficha} from "./Ficha";
import { Nodo } from "./Nodo";

export class Casilla<D> extends Nodo <D, Casilla<D>> {
    ficha?: Ficha<D>;
    id: number;
    orientation?: boolean;
    
    constructor (id:number, orientation?: boolean, ficha?: Ficha<D>){
      super();
      this.id = id;
      this.orientation = orientation;
      this.ficha = ficha;
    }
    
    removeFicha (): void{
      this.ficha = undefined;
    }
  }

  export class CasillaTriangular extends Casilla<directions> {
    
  }
