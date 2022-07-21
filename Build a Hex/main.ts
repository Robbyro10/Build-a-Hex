//PROYECTO BUILD A HEX GAME
//JUAN HEDDERICH

import {Player} from './classes/Player';
import { CasillaCreator } from './classes/CasillaCreator';
import { Puntaje } from './classes/Puntaje';
import { Casilla, CasillaTriangular } from './classes/Casilla';
import { Ficha, FichaTriangular } from './classes/Ficha';
import { Hexagon } from './classes/Hexagon';
import { GameOver } from './classes/GameOver';
import { PiezaCreator } from './classes/PiezaCreator';
import { Setter } from './classes/Setter';

//Implementation
let hexagon = new Hexagon;
let setter = new Setter;
let piezaCreator = new PiezaCreator;
let casillaCreator = new CasillaCreator;
let gameOver = new GameOver;
let points = new Puntaje(0, 1);

let pieza1: Ficha[] = piezaCreator.crearPieza(6,"azul");
piezaCreator.setPieza(pieza1);

let tablero: Casilla[] = casillaCreator.crearCasillas(54);
setter.setOrientation(tablero);
setter.setTablero(tablero);

let ficha0: Ficha = new FichaTriangular("rojo", true); 
let ficha1: Ficha = new FichaTriangular("rojo", false);
let ficha2: Ficha = new FichaTriangular("rojo", true);
let ficha3: Ficha = new FichaTriangular("rojo", false);
let ficha4: Ficha = new FichaTriangular("rojo", true);
let ficha5: Ficha = new FichaTriangular("rojo", false);


ficha0.insertar(tablero[0]);
ficha1.insertar(tablero[1]);
ficha2.insertar(tablero[2]);
ficha3.insertar(tablero[8]);
ficha4.insertar(tablero[9]);
ficha5.insertar(tablero[10]);


let hex = [0,1,2,8,9,10];

console.log(tablero);

console.log('Is there a Hexagon?: ' + hexagon.detectHexagon(hex, tablero));

//if shape is detected, the fichas are taken removed and the points are added
if (hexagon.detectHexagon(hex, tablero) == true){
  points.addPoints(200,2);
}
console.log(tablero);
console.log('Current Points: ' + points.puntaje);
console.log('Is the game over??: ' + gameOver.isGameOver(tablero));
