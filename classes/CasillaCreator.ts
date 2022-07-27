import { Casilla } from "./Casilla";

export class CasillaCreator {

    //creates an array of Casillas with its respective id
    crearCasillas (n: number): Casilla[]{
        var casillas: Casilla[] = [];
        for (let i = 0; i < n; i++){
          casillas.push(new Casilla(i));
        }
        return casillas;
    }

}