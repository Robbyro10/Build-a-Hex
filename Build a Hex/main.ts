//PROYECTO BUILD A HEX GAME
//JUAN HEDDERICH

import {Casilla} from './classes/Casilla.js';
import {Ficha} from './classes/Ficha.js';

//The number of sides of the shape that must be formed
let shape: number = 6;

  //Funcion que recibe cantidad de triangulos en ficha y la crea
  function createFicha(orden:number, color:string):void{
    for (let i = 1; i < orden; i++){
      //En proceso

    }
  }

  let ficha0 = new Ficha("rojo");
  let ficha1 = new Ficha("rojo");
  let ficha2 = new Ficha("rojo");
  let ficha3 = new Ficha("rojo");
  let ficha4 = new Ficha("rojo");
  let ficha5 = new Ficha("rojo");
  let ficha6 = new Ficha("rojo");
  let casilla0 = new Casilla(ficha0);
  let casilla1 = new Casilla(ficha1);
  let casilla2 = new Casilla(ficha2);
  let casilla3 = new Casilla(ficha3);
  let casilla4 = new Casilla(ficha4);
  let casilla5 = new Casilla(ficha5);
  let casilla6 = new Casilla(ficha6);
  
  casilla0.add(casilla1);
  casilla0.add(casilla2);
  casilla0.add(casilla3);
  casilla0.add(casilla4);
  casilla0.add(casilla5);
  casilla0.add(casilla6);
  console.log(casilla0.detectHex());
  console.log(casilla0.vecinos.length);
