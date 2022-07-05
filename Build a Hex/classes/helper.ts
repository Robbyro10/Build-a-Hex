
class Prueba {
    id?: number;

    constructor(id?: number){
        this.id = id;
    }

    printId(): void{
        console.log(this.id);
    }
}

let prueba = new Prueba();