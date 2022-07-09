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
  let row: number = 7;
  for (let i = 0; i < row-1; i++){
    tablero[i].add(tablero[i+1]);
  
    if (tablero[i-1]){
      tablero[i].add(tablero[i-1]);
    }
    
    //check if last casilla's id is even or odd
    if ((row-1) % 2 == 0){
      if (i % 2 == 0){
        tablero[i].add(tablero[i + row+1]);
        tablero[i + row+1].add(tablero[i]);
      }
    }
    else{
      if (i % 2 != 0){
        tablero[i].add(tablero[i + row+1]);
        tablero[i + row+1].add(tablero[i]);
      }
    }
  }
}

//Implementation
let tablero = crearCasillas(54);
setAdyacentes(tablero);

let ficha0 = new Ficha("rojo");
let ficha1 = new Ficha("rojo");
let ficha2 = new Ficha("rojo");
let ficha3 = new Ficha("rojo");
let ficha4 = new Ficha("rojo");
let ficha5 = new Ficha("rojo");

insertar(ficha0, tablero[0]);
insertar(ficha1, tablero[1]);
insertar(ficha2, tablero[2]);
insertar(ficha3, tablero[8]);
insertar(ficha4, tablero[9]);
insertar(ficha5, tablero[10]);


console.log(tablero);
