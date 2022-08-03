import { Casilla } from "./Casilla";

export class GameOver<D> {

    // Checks for casillas with no fichas in it
    
    isGameOver (tablero: Casilla<D>[]): boolean{
        let resp: boolean = false;
        for (var casilla of tablero){
          if (!casilla.ficha){
            return false;
          }
        }
        return true;
      }

    

}