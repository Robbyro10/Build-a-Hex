import {Ficha} from './Ficha';
import {Casilla} from './Casilla';

export class Player {
    insertar (ficha: Ficha, casilla:Casilla): void{
        casilla.ficha = ficha;
    }
}