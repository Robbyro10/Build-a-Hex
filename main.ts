//PROYECTO BUILD A HEX GAME
//JUAN HEDDERICH

import { CasillaCreator } from './classes/CasillaCreator';
import { AddRule, Puntaje } from './classes/Puntaje';
import { Casilla, CasillaTriangular} from './classes/Casilla';
import { Ficha, FichaTriangular } from './classes/Ficha';
import { Hexagon } from './classes/Hexagon';
import { GameOver } from './classes/GameOver';
import { FichaCreator} from './classes/FichaCreator';
import { BoardCreator } from './classes/BoardCreator';
import { PiezaHandler } from './classes/PiezaHandler';
import { directions } from './CustomTypes/Directions';
import { PiezaCreator } from './classes/PizaCreator';

//Implementation
let hexagon = new Hexagon;
let boardCreator = new BoardCreator;
let piezaCreator = new PiezaCreator;
let fichaCreator = new FichaCreator<directions>;
let piezaHandler = new PiezaHandler;
let casillaCreator = new CasillaCreator<directions>;
let gameOver = new GameOver;
let puntaje = new Puntaje(0);
let regla = new AddRule;

//BOARD CREATION
//Refers to the specific board of 54 fichas and in the shape of a hexagon
let tableroHexagonal: CasillaTriangular[] = casillaCreator.crearCasillas(54);
boardCreator.getTableroHexagonal(tableroHexagonal);
console.log(tableroHexagonal);

//PIEZA GENERATION(Random)
//Will generate piezas of less than n fichas

let pieza0: FichaTriangular[] = fichaCreator.crearFichasRandom(6);
let pieza1: FichaTriangular[] = fichaCreator.crearFichasRandom(6);
let pieza2: FichaTriangular[] = fichaCreator.crearFichasRandom(6);

piezaCreator.getPieza(pieza0);

piezaCreator.getPieza(pieza1);

piezaCreator.getPieza(pieza2);

console.log("Pieza0:");
console.log(pieza0);
console.log("Pieza1:");
console.log(pieza1);
console.log("Pieza2:");
console.log(pieza2);

////PIEZA GENERATION(Manual)
//Will generate piezas of n fichas

let piezaManual: FichaTriangular[] = fichaCreator.crearFichasManual(4, "Green");
let piezaManual1: FichaTriangular[] = fichaCreator.crearFichasManual(2, "Green");
let piezaManual2: FichaTriangular[] = fichaCreator.crearFichasManual(3, "Blue");

/*
console.log("piezas manuales");
piezaCreator.getPieza(piezaManual);
console.log(piezaManual);
piezaCreator.getPieza(piezaManual1);
console.log(piezaManual1);
piezaCreator.getPieza(piezaManual2);
console.log(piezaManual2);
*/

//PIEZA INSERTION 

/*

let hex0 = hexagon.getHexagonIds(tableroHexagonal[0], tableroHexagonal);
piezaHandler.insertarPieza(piezaManual,4,hex0,tableroHexagonal);
piezaHandler.insertarPieza(piezaManual1,2,hex0,tableroHexagonal);

//Should not get inserted
//piezaHandler.insertarPieza(piezaManual2,2,hex1,tableroHexagonal);
let hex20 = hexagon.getHexagonIds(tableroHexagonal[20], tableroHexagonal);
let hex32 = hexagon.getHexagonIds(tableroHexagonal[32], tableroHexagonal);
let hex30 = hexagon.getHexagonIds(tableroHexagonal[30], tableroHexagonal);

let piezaManual3: FichaTriangular[] = fichaCreator.crearFichasManual(3,"Black");
let piezaManual4: FichaTriangular[] = fichaCreator.crearFichasManual(2,"Black");
let piezaManual5: FichaTriangular[] = fichaCreator.crearFichasManual(4,"Black");

piezaHandler.insertarPieza(piezaManual3,0,hex20,tableroHexagonal);
piezaHandler.insertarPieza(piezaManual4,1,hex32,tableroHexagonal);
piezaHandler.insertarPieza(piezaManual5,1,hex30,tableroHexagonal);

//HEXAGON DETECTION
//we declare an array of id's to check for fichas of the same color
//if hexagon requested doesnt exist, will return empty array

console.log("Prueba 1: " + hex0);
console.log('Is there a Hexagon?: ' + hexagon.detectHexagon(hex0, tableroHexagonal));
console.log("Prueba 2: " + hex20);
console.log('Is there a Hexagon?: ' + hexagon.detectHexagon(hex20, tableroHexagonal));
//console.log(tableroHexagonal);

if (hexagon.detectHexagon(hex20, tableroHexagonal)){
  puntaje.changePoints(regla);
  console.log(puntaje);
}
if (hexagon.detectHexagon(hex0, tableroHexagonal)){
  puntaje.changePoints(regla);
  console.log(puntaje);
}

*/

//console.log(tablero);

//PIEZA ROTATION
/*
piezaHandler.rotate(pieza0);
console.log("Pieza rotada: ");
console.log(pieza0);
piezaHandler.rotate(pieza0);
console.log("Otra Rotacion: ");
console.log(pieza0);
piezaHandler.rotate(pieza0);
console.log("Otra Rotacion: ");
console.log(pieza0);
*/

//FICHA INSERTION
/*
let ficha0 = new Ficha("Pink", true); 
let ficha1 = new Ficha("White", false);
let ficha2 = new FichaTriangular("Black", true);
let ficha6 = new FichaTriangular("Red", false);
let ficha7 = new FichaTriangular("Yellow", false);

//Should all get inserted
ficha0.insertar(tableroHexagonal[0]);
ficha1.insertar(tableroHexagonal[1]);
ficha2.insertar(tableroHexagonal[2]);

//Should not get inserted
ficha6.insertar(tableroHexagonal[2]);
ficha7.insertar(tableroHexagonal[0]);
*/
//console.log(tableroHexagonal);

//CHECK FOR GAME OVER 
//console.log('Is the game over??: ' + gameOver.isGameOver(tableroHexagonal));


