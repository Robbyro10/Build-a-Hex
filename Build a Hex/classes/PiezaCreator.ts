import { Ficha } from "./Ficha";

export class PiezaCreator {

    crearPieza(shape: number, color: string): Ficha[]{
        var fichas: Ficha[] = [];
        let max = shape;
        max = Math.floor(max);
        let n = Math.floor(Math.random() * (max - 1) + 1);
        for (let i = 0; i < n; i++){
          fichas.push(new Ficha(color));
        }
        return fichas;
      }
  
      setPieza (fichas: Ficha[]): void{
        if (fichas.length > 1){
          for (let i = 0; i < fichas.length-1;i++){
            fichas[i].add(fichas[i+1]);
            fichas[i+1].add(fichas[i]);
          }
        }
      }
}