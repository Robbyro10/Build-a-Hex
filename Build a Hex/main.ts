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

function setAdyacentes(tablero: Casilla[]): void{
  let row0: number = 7;
  let row1: number = 9;
  let row2: number = 11;
  let row: number = row0;
  let isFirst: boolean = true;
  for (let i = 0; i < 53; i++){

    if ((row-1)%2 == 0){
      if(i%2 == 0){
        tablero[i].add(tablero[i+row+1]);
        tablero[i+row+1].add(tablero[i]);
      }
    }
    else{
      if(i%2 != 0){
        tablero[i].add(tablero[i+row+1]);
        tablero[i+row+1].add(tablero[i]);
      }
    }

    if ((isFirst == false) && (i < row-1)){ //it is not first or last
      tablero[i].add(tablero[i-1]);
      tablero[i].add(tablero[i+1]);
    }
    else if (isFirst){ //it is first
      tablero[i].add(tablero[i+1]);
      isFirst = false;
    }
    else if (i == row-1){ //it is last
      tablero[i].add(tablero[i-1]);
      isFirst = true;
      if (i == 6){row += row1} //last of first row
      else if((i == 15) || (i == 26)){row += row2;}//last of second and third row
      else if (i == 37){row += row1} //last of fourth row
      else if (i == 46){row += row0;} //last of fifth row
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
console.log(detectHex(tablero, "rojo"));
