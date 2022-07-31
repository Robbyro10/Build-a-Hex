//PROYECTO BUILD A HEX GAME
//JUAN HEDDERICH

import { CasillaCreator } from './classes/CasillaCreator';
import { Puntaje } from './classes/Puntaje';
import { Casilla} from './classes/Casilla';
import { Ficha, FichaTriangular } from './classes/Ficha';
import { Hexagon } from './classes/Hexagon';
import { GameOver } from './classes/GameOver';
import { PiezaCreator } from './classes/PiezaCreator';
import { BoardCreator } from './classes/BoardCreator';
import { PiezaHandler } from './classes/PiezaHandler';

//Implementation
let hexagon = new Hexagon;
let boardCreator = new BoardCreator;
let piezaCreator = new PiezaCreator;
let piezaHandler = new PiezaHandler;
let casillaCreator = new CasillaCreator;
let gameOver = new GameOver;

//BOARD CREATION
//Refers to the specific board of 54 fichas and in the shape of a hexagon
//console.log("BOARD CREATION:");
let tableroHexagonal: Casilla[] = casillaCreator.crearCasillas(54);
boardCreator.setCasillaOrientation(tableroHexagonal);
boardCreator.setTableroHexagonal(tableroHexagonal);
//console.log(tableroHexagonal);

//PIEZA GENERATION
//will generate piezas of less than n
//console.log("PIEZA CREATION:");
let pieza0: FichaTriangular[] = piezaCreator.crearFichas(6, "Black");
let pieza1: FichaTriangular[] = piezaCreator.crearFichas(6, "Black");
let pieza2: FichaTriangular[] = piezaCreator.crearFichas(6, "Black");

piezaCreator.setFichaOrientation(pieza0);
piezaCreator.setPieza(pieza0);

piezaCreator.setFichaOrientation(pieza1);
piezaCreator.setPieza(pieza1);

piezaCreator.setFichaOrientation(pieza2);
piezaCreator.setPieza(pieza2);

console.log(pieza0);
/*
console.log(pieza1);
console.log(pieza2);
*/


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


// PIEZA VALIDATION
/*console.log("PIEZA VALIDATION:");
if (piezaHandler.validarInsertion(pieza0, tableroHexagonal[16],tableroHexagonal)){
  console.log("The ficha is insertable");
  piezaHandler.insertarPieza(pieza0, tableroHexagonal[16],tableroHexagonal);
} else {
  console.log("The ficha is NOT insertable");
}
*/

//FICHA INSERTION
//console.log("FICHA INSERTION:");
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

//console.log(tableroHexagonal);

//TEST CASE 3: HEXAGON DETECTION
//console.log("HEXAGON DETECTION: ");
//we declare an array of id's to check for fichas of the same color
let hex = [0,1,2,8,9,10];
let hex1 = hexagon.getHexagonIds(tableroHexagonal[20], tableroHexagonal);
//if hexagon requested doesnt exist, will return empty array
console.log("Prueba Actual: " + hex1);
console.log('Is there a Hexagon?: ' + hexagon.detectHexagon(hex, tableroHexagonal));

//console.log(tablero);
console.log('Is the game over??: ' + gameOver.isGameOver(tableroHexagonal));


