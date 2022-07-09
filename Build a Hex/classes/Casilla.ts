
import { Ficha } from "./Ficha";
import { Puntaje } from "./Puntaje";

export class Casilla {
    vecinos: Array<Casilla> = new Array<Casilla>();
    id: number;
    ficha?: Ficha;
  
    constructor (id:number, ficha?: Ficha){
      this.ficha = ficha;
      this.id = id;
    }
  
    add(casilla: Casilla): void {
      //agrega casilla a la coleccion de vecinos y la marca como ocupada
      this.vecinos.push(casilla);
    }
  }