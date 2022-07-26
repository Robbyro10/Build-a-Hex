//PROYECTO BUILD A HEX GAME
//JUAN HEDDERICH

import {Player} from './classes/Player';
import { CasillaCreator } from './classes/CasillaCreator';
import { Puntaje } from './classes/Puntaje';
import { Casilla} from './classes/Casilla';
import { Ficha, FichaTriangular } from './classes/Ficha';
import { Hexagon } from './classes/Hexagon';
import { GameOver } from './classes/GameOver';
import { PiezaCreator } from './classes/PiezaCreator';
import { BoardGenerator } from './classes/BoardGenerator';

//Implementation
let hexagon = new Hexagon;
let boardGenerator = new BoardGenerator;
let piezaCreator = new PiezaCreator;
let casillaCreator = new CasillaCreator;
let gameOver = new GameOver;
let points = new Puntaje(0, 1);


//Refers to the specific board of 54 fichas and in the shape of a hexagon
let tableroHexagonal: Casilla[] = casillaCreator.crearCasillas(54);

boardGenerator.setCasillaOrientation(tableroHexagonal);
boardGenerator.setTableroHexagonal(tableroHexagonal);


//Test Case 1: Pieza Generation
/*
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
ficha0.insertar(tableroHexagonal[0]);
ficha1.insertar(tableroHexagonal[1]);
ficha2.insertar(tableroHexagonal[2]);
ficha3.insertar(tableroHexagonal[8]);
ficha4.insertar(tableroHexagonal[9]);
ficha5.insertar(tableroHexagonal[10]);

//Should not get inserted
ficha6.insertar(tableroHexagonal[11]);
ficha7.insertar(tableroHexagonal[0]);

console.log(tableroHexagonal);

//TEST CASE 3: Hexagon Detection
//we declare an array of id's to check for fichas
let hex = [0,1,2,8,9,10];

console.log('Is there a Hexagon?: ' + hexagon.detectHexagon(hex, tableroHexagonal));

//If a Hexagon is detected, the fichas are removed and the points are added
if (hexagon.detectHexagon(hex, tableroHexagonal) == true){
  points.addPoints(200,2);
} 
//console.log(tablero);
console.log('Current Points: ' + points.puntaje);
console.log('Is the game over??: ' + gameOver.isGameOver(tableroHexagonal));
