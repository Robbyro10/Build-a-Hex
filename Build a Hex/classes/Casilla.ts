
import { Ficha } from "./Ficha";
import { Shape } from "./Shape";
import { Nodo } from "./Nodo";

export class Casilla extends Nodo{
    vecinos: Array<Casilla> = new Array<Casilla>();
    shape: Shape;
    id: number;
    ficha?: Ficha;
  
    constructor (shape: Shape, id:number, ficha?: Ficha){
      super();
      this.shape = shape;
      this.ficha = ficha;
      this.id = id;
    }
  }