import {Ficha} from './Ficha';
import {Casilla} from './Casilla';
import { Puntaje } from './Puntaje';

export class Player {

    insertar (ficha: Ficha, casilla:Casilla): void{
        casilla.ficha = ficha;
    }

    detectShape (shape: number[], tablero: Casilla[]): boolean{
        let ans: boolean = false;
        for (let i = 0; i < shape.length - 1; i++){ 
          if (tablero[shape[i]].ficha?.color == tablero[shape[i+1]].ficha?.color){
            ans = true;
          }
          else return false;
        }
        return ans;
      }
}