import { Ficha, FichaTriangular } from "./Ficha";
import { Colors } from "../CustomTypes/Colors";

export class PiezaCreator {
      
      //Generates a random number of fichas of given color
      crearFichas (max: number, color: Colors): Ficha[]{
        var fichas: Ficha[] = [];
        max = Math.floor(max);
        let n = Math.floor(Math.random() * (max - 1) + 1);

        for (let i = 0; i < n; i++){
          fichas.push(new Ficha(color));
        }
        return fichas;
      }
      
      setFichaOrientation (fichas: FichaTriangular[]): void{
        for (let i = 0; i < fichas.length; i++){
          if (i % 2 == 0){
            fichas[i].orientation = true;
          } else {
            fichas[i].orientation = false;
          }
        }
      }

      //Arranges a given number of fichas into a pieza
      setFichaVecinos (fichas: FichaTriangular[]): void{
        let horizontal = 2;
        let vertical = 1;
        
        for (let i = 0; i < fichas.length-1; i++){
          if (horizontal){
            fichas[i].add("Derecha", fichas[i+1]);
            fichas[i+1].add("Izquierda", fichas[i]);
            horizontal--;
          } 
          else if (vertical){
            fichas[i].add("Abajo", fichas[i+1]);
            fichas[i+1].add("Arriba", fichas[i]);
            vertical--;
          }
          else {
            fichas[i].add("Izquierda", fichas[i+1]);
            fichas[i+1].add("Derecha", fichas[i]);
            horizontal--;
          }
        }
      }
}