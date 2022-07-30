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
let pieza0: FichaTriangular[] = piezaCreator.crearFichas(6, "Black");
let pieza1: FichaTriangular[] = piezaCreator.crearFichas(6, "Black");
let pieza2: FichaTriangular[] = piezaCreator.crearFichas(6, "Black");

piezaCreator.setFichaOrientation(pieza0);
piezaCreator.setFichaVecinos(pieza0);

piezaCreator.setFichaOrientation(pieza1);
piezaCreator.setFichaVecinos(pieza1);

piezaCreator.setFichaOrientation(pieza2);
piezaCreator.setFichaVecinos(pieza2);

console.log(pieza0);
console.log(pieza1);
console.log(pieza2);
*/

//TEST CASE 2: Ficha Insertion
let ficha0 = new FichaTriangular("Red", true); 
let ficha1 = new FichaTriangular("Red", false);
let ficha2 = new FichaTriangular("Red", true);
let ficha3 = new FichaTriangular("Red", false);
let ficha4 = new FichaTriangular("Red", true);
let ficha5 = new FichaTriangular("Red", false);
let ficha6 = new FichaTriangular("Red", false);
let ficha7 = new FichaTriangular("Yellow", false);

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
  points.addPoints(100,1);
} 
//console.log(tablero);
console.log('Current Points: ' + points.puntaje);
console.log('Is the game over??: ' + gameOver.isGameOver(tableroHexagonal));
