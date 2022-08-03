
import { Casilla, CasillaTriangular } from "./Casilla";


export class Hexagon {
  
  //Get the casilla.ids for any hexagon on the board
  getHexagonIds (casilla: CasillaTriangular, tablero: CasillaTriangular[]): number[] {
    let ids: number[] = [];
    ids.push(casilla.id);
    let vecinoDerecha = casilla.vecinos.get("Derecha")?.id;
    if (vecinoDerecha){
      ids.push(vecinoDerecha);
      ids.push(tablero[vecinoDerecha + 1].id);
    }
    else{
      return ids = [];
    }
    let vecinoAbajo = casilla.vecinos.get("Abajo")?.id;
    if (vecinoAbajo){
      ids.push(tablero[vecinoAbajo + 2].id);
      ids.push(tablero[vecinoAbajo + 1].id);
      ids.push(vecinoAbajo);
    }
    else{
      return ids = [];
    }
    return ids;
  }

  //Detects if there is a Hexagon on the board
  detectHexagon (nodes: number[], tablero: CasillaTriangular[]): boolean{
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
