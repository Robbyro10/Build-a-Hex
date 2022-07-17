import {Token, Ficha} from './Token';
import {Box, Casilla} from './Box';
import { Puntaje } from './Puntaje';
import { Nodo } from './Nodo';

export class Player {

    insertar (token: Token, box:Box): void{
        box.token = token;
    }

    detectShape (nodes: number[], tablero: Box[]): boolean{
        let ans: boolean = false;
        if (nodes.length != 6){return false;} //Checks the provided array refers to a hexagon
        for (let i = 0; i < nodes.length - 1; i++){ 
          if (tablero[nodes[i]].token?.color == tablero[nodes[i+1]].token?.color){
            ans = true;
          }
          else return false;
        }
        return ans;
    }

    removeFicha (box: Box): void{
        delete(box.token);
    }

    isGameOver (tablero: Box[]): boolean{
      let resp: boolean = false;
      for (var casilla of tablero){
        if (!casilla.token){
          return false;
        }
      }
      return true;
    }
}