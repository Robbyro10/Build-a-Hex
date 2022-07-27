"use strict";
//PROYECTO BUILD A HEX GAME
//JUAN HEDDERICH
class Casilla {
    constructor(ficha) {
        this.vecinos = new Array();
        this.ficha = ficha;
    }
    //check get methods
    get getFicha() {
        return this.ficha;
    }
    ;
    add(casilla) {
        //agrega casilla a la coleccion de vecinos y la marca como ocupada
        this.vecinos.push(casilla);
    }
    //detecta hexagono en tablero
    detectHex() {
        let cont = 0;
        for (var vecino of this.vecinos) {
            if (vecino.ficha.color == this.ficha.color) {
                cont++;
            }
        }
        if (cont == 6) {
            return true;
        }
        else {
            return false;
        }
    }
}
class Ficha {
    constructor(color) {
        this.color = color;
    }
}
let ficha1 = new Ficha("rojo");
let ficha2 = new Ficha("rojo");
let ficha3 = new Ficha("rojo");
let ficha4 = new Ficha("rojo");
let ficha5 = new Ficha("rojo");
let ficha6 = new Ficha("verde");
let casilla1 = new Casilla(ficha1);
let casilla2 = new Casilla(ficha2);
let casilla3 = new Casilla(ficha3);
let casilla4 = new Casilla(ficha4);
let casilla5 = new Casilla(ficha5);
let casilla6 = new Casilla(ficha6);
casilla1.add(casilla1);
casilla1.add(casilla2);
console.log(casilla1.detectHex());
console.log("My name is Alex");
