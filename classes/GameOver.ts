import { Casilla } from "./Casilla";

export class GameOver {

    // Checks for casillas with no fichas in it
    
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