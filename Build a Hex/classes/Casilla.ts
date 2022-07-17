
import { Ficha } from "./Ficha";
import { Shape } from "./Shape";
import { Nodo } from "./Nodo";

export class Casilla {
    vecinos: Array<Casilla> = new Array<Casilla>();
    shape: Shape;
    id: number;
    ficha?: Ficha;
  
    constructor (shape: Shape, id:number, ficha?: Ficha){
      this.shape = shape;
      this.ficha = ficha;
      this.id = id;
    }

    add(casilla: Casilla): void {
      this.vecinos.push(casilla);
  }
  }