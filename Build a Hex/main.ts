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
import { Nodo } from './classes/Nodo';

//Implementation
let hexagon = new Hexagon;
let setter = new Setter;
let piezaCreator = new PiezaCreator;
let casillaCreator = new CasillaCreator;
let gameOver = new GameOver;
let points = new Puntaje(0, 1);


let tablero: Casilla[] = casillaCreator.crearCasillas(54);
setter.setCasillaOrientation(tablero);
setter.setTablero(tablero);

//Test Case 1: Pieza Generation

let pieza0: Ficha[] = piezaCreator.crearPieza(6,"Blue");
let pieza1: Ficha[] = piezaCreator.crearPieza(6,"Green");
let pieza2: Ficha[] = piezaCreator.crearPieza(6,"Yellow");

piezaCreator.setPieza(pieza0);
piezaCreator.setPieza(pieza1);
piezaCreator.setPieza(pieza2);
/*
console.log(pieza0); 
console.log(pieza1); 
console.log(pieza2);
*/

//TEST CASE 2: Ficha Insertion

let ficha0: Ficha = new FichaTriangular("Red", true); 
let ficha1: Ficha = new FichaTriangular("Red", false);
let ficha2: Ficha = new FichaTriangular("Red", true);
let ficha3: Ficha = new FichaTriangular("Red", false);
let ficha4: Ficha = new FichaTriangular("Red", true);
let ficha5: Ficha = new FichaTriangular("Red", false);
let ficha6: Ficha = new FichaTriangular("Red", false);
let ficha7: Ficha = new FichaTriangular("Yellow", false);

//Should all get inserted
ficha0.insertar(tablero[0]);
ficha1.insertar(tablero[1]);
ficha2.insertar(tablero[2]);
ficha3.insertar(tablero[8]);
ficha4.insertar(tablero[9]);
ficha5.insertar(tablero[10]);

//Should not get inserted
ficha6.insertar(tablero[11]);
ficha7.insertar(tablero[0]);

console.log(tablero);

//TEST CASE 3: Hexagon Detection
//we declare an array of id's to check for fichas
let hex = [0,1,2,8,9,10];

console.log('Is there a Hexagon?: ' + hexagon.detectHexagon(hex, tablero));

//If a Hexagon is detected, the fichas are removed and the points are added
if (hexagon.detectHexagon(hex, tablero) == true){
  points.addPoints(200,2);
} 
//console.log(tablero);
console.log('Current Points: ' + points.puntaje);
console.log('Is the game over??: ' + gameOver.isGameOver(tablero));
