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

function insertar (ficha: Ficha, casilla:Casilla): void{
  casilla.ficha = ficha;
}

function crearCasillas (n: number): Casilla[]{
  var casillas: Casilla[] = [];
  for (let i = 0; i < n; i++){
    casillas.push(new Casilla(i));
  }
  return casillas;
}

function setAdyacentes1 (tablero: Casilla[]): void{
  var row: number[] = [7,16,27,38,47,54];
  let i:number = 0;

  //first row
  for (i = 0; i < 7; i++){

    if (i < 7-1){
      tablero[i].add(tablero[i+1]);
    }

    if (tablero[i-1]){
      tablero[i].add(tablero[i-1]);
    }

    if (i % 2 == 0){
      tablero[i].add(tablero[i+8]);
      tablero[i+8].add(tablero[i]);
    }
  }
  //second row
  for (i = 7; i < 16; i++){
    if (i < 16-1){
      tablero[i].add(tablero[i+1]);
    }

    if (tablero[i-7-1]){
      tablero[i].add(tablero[i-1]);
    }

    if (i % 2 != 0){
      tablero[i].add(tablero[i+10]);
      tablero[i+10].add(tablero[i]);
    }
  }
  //third row
  for (i = 16; i < 27; i++){
    if (i < 27 - 1){
      tablero[i].add(tablero[i+1]);
    }

    if (tablero[i-16-1]){
      tablero[i].add(tablero[i-1]);
    }

    if (i % 2 == 0){
      tablero[i].add(tablero[i+11]);
      tablero[i+11].add(tablero[i]);
    }
  }
  //fourth row
  for (i = 27; i < 38; i++){

    if (i < 38-1){
      tablero[i].add(tablero[i+1]);
    }

    if (tablero[i-27-1]){
      tablero[i].add(tablero[i-1]);
    }

    if (i % 2 == 0){
      tablero[i].add(tablero[i+10]);
      tablero[i+10].add(tablero[i]);
    }
  }
  //fifth row
  for (i = 38; i < 47; i++){
    if (i < 47 - 1){
      tablero[i].add(tablero[i+1]);
    }

    if (tablero[i-38-1]){
      tablero[i].add(tablero[i-1]);
    }

    if (i % 2 != 0){
      tablero[i].add(tablero[i+8]);
      tablero[i+8].add(tablero[i]);
    }
  }
  //sixth row
  for (i = 47; i < 54; i++){
    if (i < 54 - 1){
      tablero[i].add(tablero[i+1]);
    }

    if (tablero[i-47-1]){
      tablero[i].add(tablero[i-1]);
    }
  }
}

function detectHex(tablero: Casilla[], color: string): number {
  let cont: number = 0;
  for (var casilla of tablero){
    for (var vecino of casilla.vecinos){
      if ((casilla.ficha) && (casilla.ficha.color == color)){
        cont++;
      }
    }
  }
  if (cont > 1){
    return cont;
  }
  else{
    return cont;
  }
}

//Implementation
let tablero = crearCasillas(54);
setAdyacentes1(tablero);

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
insertar(ficha5, tablero[53]);

console.log(tablero);
