//PROYECTO BUILD A HEX GAME
//JUAN HEDDERICH

import {Player} from './classes/Player';
import {Generator} from './classes/Generator';
import { Puntaje } from './classes/Puntaje';
import { Casilla } from './classes/Casilla';
import { Ficha, FichaTriangular } from './classes/Ficha';
import { Shape } from './classes/Shape';
import { GameOver } from './classes/GameOver';
//Implementation

let shape = new Shape;
let generator = new Generator;
let gameOver = new GameOver;
let points = new Puntaje(0, 1);

let pieza1: Ficha[] = generator.crearPieza(6,"azul");
generator.setPieza(pieza1);

let tablero: Casilla[] = generator.crearCasillas(54);
generator.setTablero(tablero);

let ficha0: Ficha = new FichaTriangular("rojo", true);

ficha0.insertar(tablero[0]);
ficha0.insertar(tablero[1]);
ficha0.insertar(tablero[2]);
ficha0.insertar(tablero[8]);
ficha0.insertar(tablero[9]);
ficha0.insertar(tablero[10]);

let hex = [0,1,2,8,9,10];

console.log(tablero);

console.log('Is there a Hexagon?: ' + shape.detectShape(hex, tablero));

//if shape is detected, the fichas are taken removed and the points are added
if (shape.detectShape(hex, tablero) == true){
  points.addPoints(200,2);
}
console.log(tablero);
console.log('Current Points: ' + points.puntaje);
console.log('Is the game over??: ' + gameOver.isGameOver(tablero));
