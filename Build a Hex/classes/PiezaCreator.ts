import { Ficha } from "./Ficha";
import { Colors } from "../CustomTypes/Colors";

export class PiezaCreator {

    crearPieza(shape: number, color: Colors): Ficha[]{
        var fichas: Ficha[] = [];
        let max = shape;
        max = Math.floor(max);
        let n = Math.floor(Math.random() * (max - 1) + 1);
        for (let i = 0; i < n; i++){
          fichas.push(new Ficha(color));
          if (i%2 == 0){fichas[i].orientation = true;}
          else {fichas[i].orientation = false; }
        }
        return fichas;
      }
  
      setPieza (fichas: Ficha[]): void{
        if (fichas.length > 1){
          for (let i = 0; i < fichas.length-1;i++){
            fichas[i].add('Derecha',fichas[i+1]);
            fichas[i+1].add('Izquierda',fichas[i]);
          }
        }
      }
}