import { Ficha, FichaTriangular } from "./Ficha";
import { Colors } from "../CustomTypes/Colors";
import { directions } from "../CustomTypes/Directions";

export class FichaCreator<D> {

      //Generates a random number of fichas of given color
      crearFichasRandom (max: number, color: Colors): Ficha<D>[]{
        var fichas: Ficha<D>[] = [];
        max = Math.floor(max);
        let n = Math.floor(Math.random() * (max - 1) + 1);

        for (let i = 0; i < n; i++){
          fichas.push(new Ficha(color));
        }
        return fichas;
      }

      crearFichasManual (n: number, color: Colors): Ficha<D>[]{
        var fichas: Ficha<D>[] = [];
        for (let i = 0; i < n; i++){
          fichas.push(new Ficha<D>(color));
        }
        return fichas;
      }
}