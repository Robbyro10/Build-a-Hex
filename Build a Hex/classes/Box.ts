
import { Ficha, Token } from "./Token";
import { Nodo } from "./Nodo";

export class Box extends Nodo{
    token?: Token;
    id: number;
  
    constructor (id:number, token?: Token){
      super();
      this.id = id;
      this.token = token;
    }
  }

  export class Casilla extends Box {
  
  }