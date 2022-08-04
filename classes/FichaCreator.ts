import { Ficha, FichaTriangular } from "./Ficha";
import { Colors } from "../CustomTypes/Colors";

export class FichaCreator<D> {

      //Generates a random number of fichas of given color
      crearFichasRandom(max: number): Ficha<D>[]{
        let color: Colors[] = ["Blue","Red","Green","Yellow","Pink"]
        var fichas: Ficha<D>[] = [];
        max = Math.floor(max);
        //random number of fichas
        let n = Math.floor(Math.random() * (max - 1) + 1);
        //random color
        let c = Math.floor(Math.random() * (color.length));

        for (let i = 0; i < n; i++){
          fichas.push(new Ficha(color[c]));
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