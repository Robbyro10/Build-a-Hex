
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
  
    //detecta hexagono en tablero y lo elimina
    detectHex(): boolean { 
      let cont = 0;
        for (var vecino of this.vecinos){
          if (vecino.ficha?.color == this.ficha?.color){
            cont++;
          }
        }
        if (cont == 6){ 
          for (let i = 0; i < 6; i++){
            this.vecinos.pop();
          }
          return true;
        }
        else{return false;}  
      } 
  }