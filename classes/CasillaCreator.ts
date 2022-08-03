import { Casilla } from "./Casilla";

export class CasillaCreator<D> {

    //creates an array of Casillas with its respective id
    crearCasillas (n: number): Casilla<D>[]{
        var casillas: Casilla<D>[] = [];
        for (let i = 0; i < n; i++){
          casillas.push(new Casilla(i));
        }
        return casillas;
    }

}