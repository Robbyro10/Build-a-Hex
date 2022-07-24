import { CasillaTriangular } from "./Casilla";

export class CasillaOrientator {

    setCasillaOrientation(tablero: CasillaTriangular[]): void {
        //first row
        let i: number = 0;
  
        for (i = 0; i < 7; i++){
          if (i%2==0){tablero[i].orientation = true;}
          else {tablero[i].orientation = false;}
        }
        //second row
        for (i = 7; i < 16; i++){
          if (i%2!=0){tablero[i].orientation = true;}
          else {tablero[i].orientation = false;}
        }
        //third and fourth
        for (i = 16; i < 38; i++){
          if (i%2==0){tablero[i].orientation = true;}
          else {tablero[i].orientation = false;}
        }
        //fifth row
        for (i = 38; i < 47; i++){
          if (i%2!=0){tablero[i].orientation = true;}
          else {tablero[i].orientation = false;}
        }
        //sixth row
        for (i = 47; i < 54; i++){
          if (i%2==0){tablero[i].orientation = true;}
          else {tablero[i].orientation = false;}
        }
      }
}