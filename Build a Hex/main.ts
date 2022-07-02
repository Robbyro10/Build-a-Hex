//PROYECTO BUILD A HEX GAME
//JUAN HEDDERICH

//limite de 54 casillas
let puntaje: number = 0;

class Casilla {
    vecinos: Array<Casilla> = new Array<Casilla>();
    ficha: Ficha;
  
    constructor (ficha: Ficha){
      this.ficha = ficha;
    }
  
    //check get methods
    get getFicha(): Ficha { 
      return this.ficha; 
    };
  
    add(casilla: Casilla): void {
      //agrega casilla a la coleccion de vecinos y la marca como ocupada
      this.vecinos.push(casilla);
    }
  
    //detecta hexagono en tablero y lo elimina
    detectHex(): boolean { 
      let cont = 0;
      for (var vecino of this.vecinos){
        if (vecino.ficha.color == this.ficha.color){
          cont++;
        }
      }
      if (cont == 6){ 
        for (let i = 0; i < 6; i++){
          this.vecinos.pop();
        }
        puntaje += 100;
        return true;
      }
      else{return false;}
    }
    
  }
  
  class Ficha{
    color: String;
  
    constructor(color: String){
      this.color = color;
    } 
  }

  //Funcion que recibe cantidad de triangulos en ficha y la crea
  function createFicha(orden:number):void{
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
