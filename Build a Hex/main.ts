//PROYECTO BUILD A HEX GAME
//JUAN HEDDERICH

import {Player} from './classes/Player';
import {Generator} from './classes/Generator';
import { Puntaje } from './classes/Puntaje';
import { Shape} from './classes/Shape';
import { Nodo } from './classes/Nodo'; 
import { Ficha } from './classes/Ficha'; 

//Implementation

let player = new Player;
let generator = new Generator;
let points = new Puntaje(0, 1);
let hexagon = new Shape(6);
let triangle = new Shape(3);

let pieza1: Ficha[] = generator.crearPieza(hexagon,"azul");
generator.setPieza(pieza1);

let tablero = generator.crearCasillas(triangle, 54);
generator.setTablero(tablero);

let ficha0 = new Ficha("rojo");
let ficha1 = new Ficha("rojo");
let ficha2 = new Ficha("rojo");
let ficha3 = new Ficha("rojo");
let ficha4 = new Ficha("rojo");
let ficha5 = new Ficha("rojo");


player.insertar(ficha0, tablero[0]);
player.insertar(ficha1, tablero[1]);
player.insertar(ficha2, tablero[2]);
player.insertar(ficha3, tablero[8]);
player.insertar(ficha4, tablero[9]);
player.insertar(ficha5, tablero[10]);
player.insertar(ficha5, tablero[53]);

let hex = [0,1,2,8,9,10];
console.log(player.detectShape(hexagon, hex, tablero));
if (player.detectShape(hexagon, hex, tablero) == true){
  points.addPoints(200,2);
}
console.log(tablero);
console.log(points.puntaje);
console.log(player.isGameOver(tablero));
