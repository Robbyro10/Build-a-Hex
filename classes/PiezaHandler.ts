import { Casilla } from "./Casilla";
import { Ficha, FichaTriangular } from "./Ficha";

export class PiezaHandler {

    insertarPieza(pieza: FichaTriangular[], position: number, hexagon: number[], tablero: Casilla[]):void {
      //array of valid casilla.ids for insertion
      let ids: number[] = [];
      //first we validate the insertion
      for (let i = 0; i < pieza.length; i++){
        if (position == 6){ 
          position = 0;
        }
        
        if (tablero[hexagon[position]].ficha){
          console.log("Insertion Failed");
          return;
        }
        else{
          ids.push(hexagon[position])
          //helps with testing
          console.log(hexagon[position]);
        }
        position++
      }
      //We insert the fichas
      for (let i = 0; i < ids.length; i++){
        tablero[ids[i]].ficha = pieza[i];
        pieza[i].orientation = tablero[ids[i]].orientation;
      }
      console.log(); //Better readability 
    }

    deletePieza (pieza: Ficha[]): void{
      pieza = [];
    }

    rotate(pieza: Ficha[]): void {
        for (let i = 0; i < pieza.length; i++){
          if (pieza[i].orientation){
            if (pieza[i].vecinos.has("Izquierda")){
              if (pieza[i].vecinos.has("Derecha")){
                //Izq, der
                pieza[i].vecinos.clear();
                pieza[i].vecinos.set("Arriba", pieza[i+1]);
                pieza[i].vecinos.set("Derecha", pieza[i-1]);
              }
              else if (pieza[i].vecinos.has("Abajo")){
                //Izq, Abajo
                pieza[i].vecinos.clear();
                pieza[i].vecinos.set("Izquierda", pieza[i+1]);
                pieza[i].vecinos.set("Arriba", pieza[i-1]);
              }
              else{ 
                //solo un vecino
                pieza[i].vecinos.delete("Izquierda");
                pieza[i].vecinos.set("Arriba", pieza[i-1]);
              }
            }
            else if (pieza[i].vecinos.has("Abajo")){
              if (pieza[i].vecinos.has("Derecha")){
                //Abajo, der
                pieza[i].vecinos.clear();
                pieza[i].vecinos.set("Derecha", pieza[i+1]);
                pieza[i].vecinos.set("Izquierda", pieza[i-1]);
              }
              else {
                //solo un vecino
                pieza[i].vecinos.delete("Abajo");
                pieza[i].vecinos.set("Izquierda", pieza[i+1]);
              }
            }
          }
          else{
            if (pieza[i].vecinos.has("Derecha")){
              if (pieza[i].vecinos.has("Izquierda")){
                //Izq, der
                pieza[i].vecinos.clear();
                pieza[i].vecinos.set("Izquierda", pieza[i-1]);
                pieza[i].vecinos.set("Abajo", pieza[i+1]);
              }
              else if (pieza[i].vecinos.has("Arriba")){
                //Der, Arriba
                pieza[i].vecinos.clear();
                pieza[i].vecinos.set("Derecha", pieza[i+1]);
                pieza[i].vecinos.set("Abajo", pieza[i-1]);
              }
              else{ 
                //solo un vecino
                pieza[i].vecinos.delete("Derecha");
                if (pieza[i-1]){
                  pieza[i].vecinos.set("Abajo", pieza[i-1]);
                }else{
                  pieza[i].vecinos.set("Abajo", pieza[i+1]);
                }
              }
            }
            else if (pieza[i].vecinos.has("Arriba")){
              if (pieza[i].vecinos.has("Izquierda")){
                //Arriba, izq
                pieza[i].vecinos.clear();
                pieza[i].vecinos.set("Izquierda", pieza[i+1]);
                pieza[i].vecinos.set("Derecha", pieza[i-1]);
              } else {
                //solo un vecino
                pieza[i].vecinos.delete("Arriba");
                pieza[i].vecinos.set("Derecha", pieza[i-1]);
              }
            }
          }

          pieza[i].flip();
        }
      }
}