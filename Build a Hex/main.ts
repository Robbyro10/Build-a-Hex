//PROYECTO BUILD A HEX GAME
//JUAN HEDDERICH

import {Player} from './classes/Player';
import {Generator} from './classes/Generator';
import { Puntaje } from './classes/Puntaje';
import { Casilla } from './classes/Casilla';
import { Ficha, FichaTriangular } from './classes/Ficha';

//Implementation

let player = new Player;
let generator = new Generator;
let points = new Puntaje(0, 1);

let pieza1: Ficha[] = generator.crearPieza(6,"azul");
generator.setPieza(pieza1);

let tablero: Casilla[] = generator.crearCasillas(54);
generator.setTablero(tablero);

let ficha0: Ficha = new FichaTriangular("rojo");
let ficha1: Ficha = new FichaTriangular("rojo");
let ficha2: Ficha = new FichaTriangular("rojo");
let ficha3: Ficha = new FichaTriangular("rojo");
let ficha4: Ficha = new FichaTriangular("rojo");
let ficha5: Ficha = new FichaTriangular("rojo");


player.insertar(ficha0, tablero[0]);
player.insertar(ficha1, tablero[1]);
player.insertar(ficha2, tablero[2]);
player.insertar(ficha3, tablero[8]);
player.insertar(ficha4, tablero[9]);
player.insertar(ficha5, tablero[10]);

let hex = [0,1,2,8,9,10];
console.log(tablero);
console.log('Is there a Hexagon?: ' + player.detectShape(hex, tablero));
if (player.detectShape(hex, tablero) == true){
  points.addPoints(200,2);
}
console.log('Current Points: ' + points.puntaje);
console.log('Is the game over??: ' + player.isGameOver(tablero));
