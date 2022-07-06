//PROYECTO BUILD A HEX GAME
//JUAN HEDDERICH

import {Casilla} from './classes/Casilla';
import {Ficha} from './classes/Ficha';
import { Puntaje } from './classes/Puntaje';

//Funcion que recibe cantidad de triangulos en ficha y la crea
function createFicha(orden:number, color:string):void{
  for (let i = 1; i < orden; i++){
    //En proceso
    let i = new Ficha(color);
  }
}

function crearCasillas (n: number): Casilla[]{
  var casillas: Casilla[] = [];
  for (let i = 0; i < n; i++){
    casillas.push(new Casilla(i));
  }
  return casillas;
}

function insertar (ficha: Ficha, casilla:Casilla): void{
  casilla.ficha = ficha;
}

function setAdyacentes(tablero: Casilla[]): void{
  //en proceso
}

//Implementation
let tablero = crearCasillas(54);

let ficha0 = new Ficha("rojo");
insertar(ficha0, tablero[0]);
let ficha1 = new Ficha("rojo");
insertar(ficha1, tablero[1]);
let ficha2 = new Ficha("rojo");
let ficha3 = new Ficha("rojo");
let ficha4 = new Ficha("rojo");
let ficha5 = new Ficha("rojo");
let ficha6 = new Ficha("rojo");
let casilla0 = new Casilla(0, ficha0);
let casilla1 = new Casilla(1, ficha1);
let casilla2 = new Casilla(2, ficha2);
let casilla3 = new Casilla(3, ficha3);
let casilla4 = new Casilla(4, ficha4);
let casilla5 = new Casilla(5, ficha5);
let casilla6 = new Casilla(6, ficha6);
  
casilla0.add(casilla1);
casilla0.add(casilla2);
casilla0.add(casilla3);
casilla0.add(casilla4);
casilla0.add(casilla5);
casilla0.add(casilla6);
console.log(casilla0.detectHex());
console.log(casilla0.vecinos.length);
