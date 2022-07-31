import { Colors } from "../CustomTypes/Colors";
import { Casilla, CasillaTriangular } from "./Casilla";
import { FichaTriangular } from "./Ficha";
import { Nodo } from "./Nodo";

export class Hexagon {

    //Crea el molde hexagonal para crear Piezas
    crearHexagono(): CasillaTriangular[]{
      let hexagono:CasillaTriangular[] = [];
      for (let i = 0; i < 6; i++){
        hexagono.push(new CasillaTriangular(i));

      }
      for (let i = 0; i < 6; i++){
        if (i == 0){
          hexagono[i].vecinos.set("Abajo",hexagono[5]);
          hexagono[i].vecinos.set("Derecha",hexagono[i+1]);
        }
        else if(i == 1){
          hexagono[i].vecinos.set("Izquierda",hexagono[i-1]);
          hexagono[i].vecinos.set("Derecha",hexagono[i+1]);
        }
        else if (i == 2){
          hexagono[i].vecinos.set("Izquierda",hexagono[i-1]);
          hexagono[i].vecinos.set("Abajo",hexagono[i+1]);
        }
        else if (i == 3){
          hexagono[i].vecinos.set("Arriba",hexagono[i-1]);
          hexagono[i].vecinos.set("Izquierda",hexagono[i+1]);
        }
        else if (i == 4){
          hexagono[i].vecinos.set("Derecha",hexagono[i-1]);
          hexagono[i].vecinos.set("Izquierda",hexagono[i+1]);
        }
        else if (i == 5){
          hexagono[i].vecinos.set("Derecha",hexagono[i-1]);
          hexagono[i].vecinos.set("Arriba",hexagono[0]);
        }
      }
      return hexagono;
    }

    //Detects if there is a Hexagon on the board
    detectHexagon (nodes: number[], tablero: Casilla[]): boolean{
        let ans: boolean = false;
        if (nodes.length != 6){return false;} //Checks the provided array refers to a hexagon
        for (let i = 0; i < nodes.length - 1; i++){ 
          if (tablero[nodes[i]].ficha?.color == tablero[nodes[i+1]].ficha?.color){
            ans = true;
          }
          else return false;
        }
        if (ans == true){
          for (var node of nodes){
             tablero[node].removeFicha();
          }
        }
        return ans;
    }
    
}
