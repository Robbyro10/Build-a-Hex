import {CasillaTriangular, Casilla} from './Casilla';
import { FichaTriangular, Ficha } from './Ficha';

 export class Setter {

    setOrientation(tablero: CasillaTriangular[]): void {
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
    
    setTablero(tablero: CasillaTriangular[]): void{
        let i:number = 0;
      
        //first row
        for (i = 0; i < 7; i++){
      
          if (i < 7-1){
            tablero[i].add(tablero[i+1]);
          }
      
          if (tablero[i-1]){
            tablero[i].add(tablero[i-1]);
          }
      
          if (i % 2 == 0){
            tablero[i].add(tablero[i+8]);
            tablero[i+8].add(tablero[i]);
          }
        }
        //second row
        for (i = 7; i < 16; i++){
          if (i < 16-1){
            tablero[i].add(tablero[i+1]);
          }
      
          if (tablero[i-7-1]){
            tablero[i].add(tablero[i-1]);
          }
      
          if (i % 2 != 0){
            tablero[i].add(tablero[i+10]);
            tablero[i+10].add(tablero[i]);
          }
        }
        //third row
        for (i = 16; i < 27; i++){
          if (i < 27 - 1){
            tablero[i].add(tablero[i+1]);
          }
      
          if (tablero[i-16-1]){
            tablero[i].add(tablero[i-1]);
          }
      
          if (i % 2 == 0){
            tablero[i].add(tablero[i+11]);
            tablero[i+11].add(tablero[i]);
          }
        }
        //fourth row
        for (i = 27; i < 38; i++){
      
          if (i < 38-1){
            tablero[i].add(tablero[i+1]);
          }
      
          if (tablero[i-27-1]){
            tablero[i].add(tablero[i-1]);
          }
      
          if (i % 2 == 0){
            tablero[i].add(tablero[i+10]);
            tablero[i+10].add(tablero[i]);
          }
        }
        //fifth row
        for (i = 38; i < 47; i++){
          if (i < 47 - 1){
            tablero[i].add(tablero[i+1]);
          }
      
          if (tablero[i-38-1]){
            tablero[i].add(tablero[i-1]);
          }
      
          if (i % 2 != 0){
            tablero[i].add(tablero[i+8]);
            tablero[i+8].add(tablero[i]);
          }
        }
        //sixth row
        for (i = 47; i < 54; i++){
          if (i < 54 - 1){
            tablero[i].add(tablero[i+1]);
          }
      
          if (tablero[i-47-1]){
            tablero[i].add(tablero[i-1]);
          }
        }
    }
}

