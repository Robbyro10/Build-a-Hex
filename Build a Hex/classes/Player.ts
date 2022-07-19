import {FichaTriangular, Ficha} from './Ficha';
import {CasillaTriangular, Casilla} from './Casilla';
import { Puntaje } from './Puntaje';
import { Nodo } from './Nodo';

export class Player {

    insertar (ficha: Ficha, box:Casilla): void{
        box.ficha = ficha;
    }

    detectShape (nodes: number[], tablero: Casilla[]): boolean{
        let ans: boolean = false;
        if (nodes.length != 6){return false;} //Checks the provided array refers to a hexagon
        for (let i = 0; i < nodes.length - 1; i++){ 
          if (tablero[nodes[i]].ficha?.color == tablero[nodes[i+1]].ficha?.color){
            ans = true;
          }
          else return false;
        }
        return ans;
    }

    removeFicha (box: Casilla): void{
        delete(box.ficha);
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