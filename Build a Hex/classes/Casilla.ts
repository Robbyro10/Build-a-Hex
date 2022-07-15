
import { Ficha } from "./Ficha";

export class Casilla {
    vecinos: Array<Casilla> = new Array<Casilla>();
    id: number;
    ficha?: Ficha;
  
    constructor (id:number, ficha?: Ficha){
      this.ficha = ficha;
      this.id = id;
    }
  
    add(casilla: Casilla): void {
      this.vecinos.push(casilla);
    }
  }