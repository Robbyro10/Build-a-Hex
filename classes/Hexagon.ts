import { Casilla } from "./Casilla";

export class Hexagon {

    //Detects if there is a given shape of hexagons on the board

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
