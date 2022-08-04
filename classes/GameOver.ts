import { CasillaTriangular } from "./Casilla";

export class GameOver {

    // Checks for casillas with no fichas in it
    isGameOver (tablero: CasillaTriangular[]): boolean{
        let resp: boolean = false;
        for (var casilla of tablero){
          if (!casilla.ficha){
            return false;
          }
        }
        return true;
      }

    /*
    isGameOver2 (piezas: Piezas[], tablero: CasillaTriangular[]): boolean{
      for (let casilla of tablero){
        if (!casilla.ficha){
          check if insertable{
            if (insertable){return false}
          }
        }
      }
      return true;
    }
    */
}