import { FichaTriangular } from "./Ficha";

export class PiezaCreator {

      getPieza(fichas: FichaTriangular[]): void{
        this.setFichaOrientation(fichas);
      }

      setFichaOrientation (fichas: FichaTriangular[]): void{
        for (let i = 0; i < fichas.length; i++){
          if (i % 2 == 0){
            fichas[i].orientation = true;
          } else {
            fichas[i].orientation = false;
          }
        }
        this.setPieza(fichas);
      }

      //Arranges a given number of fichas into a pieza
      setPieza (fichas: FichaTriangular[]): void{
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