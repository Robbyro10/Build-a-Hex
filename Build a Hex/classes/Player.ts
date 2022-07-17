import {Ficha} from './Ficha';
import {Casilla} from './Casilla';
import { Shape } from './Shape';
import { Puntaje } from './Puntaje';
import { Nodo } from './Nodo';

export class Player {

    insertar (ficha: Ficha, casilla:Casilla): void{
        casilla.ficha = ficha;
    }

    detectShape (shape: Shape, nodes: number[], tablero: Casilla[]): boolean{
        let ans: boolean = false;
        if (shape.sides != nodes.length){return false;}
        for (let i = 0; i < nodes.length - 1; i++){ 
          if (tablero[nodes[i]].ficha?.color == tablero[nodes[i+1]].ficha?.color){
            ans = true;
          }
          else return false;
        }
        return ans;
    }

    removeFicha (casilla: Casilla): void{
        delete(casilla.ficha);
    }

    isGameOver (tablero: Casilla[]): boolean{
      let resp: boolean = false;
      for (var casilla of tablero){
        if (!casilla.ficha){
          return false;
        }
      }
      return true;
    }
}