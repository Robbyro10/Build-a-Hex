

export class Nodo <D,T> {
    
    vecinos = new Map<D,T>();
    
    add(direccion: D, nodo: T): void {
        this.vecinos.set(direccion,nodo);
    }
}

//Aqui un intento de hacer la implementacion con la direccion generica
/*
export class Nodo <T> {
    
    vecinos: Array<T> = new Array<T>();
    
    add(nodo: T): void {
        this.vecinos.push(nodo);
    }
}
*/