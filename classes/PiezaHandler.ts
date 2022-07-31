import { Casilla } from "./Casilla";
import { Ficha } from "./Ficha";

export class PiezaHandler {

    //Only works for piezas of 4 or less fichas
    validarInsertion (fichas: Ficha[], casilla: Casilla, tablero: Casilla[]): boolean{
        let n: number = casilla.id;
  
        //checks if the casilla exists and isn't ocuppied
        for (let i = 0; i < fichas.length; i++){
          if (i < 3){
            if ((!tablero[n+i]) || (tablero[n+i].ficha)){
              return false;
            }
          }
          else if (i == 3){
            if ((!tablero[n+i].vecinos.get("Abajo")?.id) || (tablero[n+i].vecinos.get("Abajo")?.ficha)){
              return false;
            }
          }
        }
        return true;
    }
    
    //Only works for piezas of 3 or less fichas
    insertarPieza (fichas: Ficha[], casilla: Casilla, tablero: Casilla[]): void{
        let n: number = casilla.id;
        for (let i = 0; i < fichas.length; i++){
          if (i < 3){
            fichas[i].insertar(tablero[n+i]);
          }
        }
    }

    rotate(pieza: Ficha[]): void {
        for (let i = 0; i < pieza.length; i++){
          if (pieza[i].orientation){
            if (pieza[i].vecinos.has("Izquierda")){
              pieza[i].vecinos.delete("Izquierda");
              pieza[i].vecinos.set("Arriba", pieza[i-1]);
            }
            else if (pieza[i].vecinos.has("Abajo")){
              pieza[i].vecinos.delete("Abajo");
              pieza[i].vecinos.set("Izquierda", pieza[i+1]);
            }
          }
          else{
            if (pieza[i].vecinos.has("Derecha")){
              pieza[i].vecinos.delete("Derecha");
              pieza[i].vecinos.set("Abajo", pieza[i+1]);
            }
            else if (pieza[i].vecinos.has("Arriba")){
              pieza[i].vecinos.delete("Arriba");
              pieza[i].vecinos.set("Derecha", pieza[i-1]);
            }
          }

          pieza[i].flip();
        }
      }
}