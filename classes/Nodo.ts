

export abstract class Nodo <D,T> {
    
    vecinos: Map<D,T> = new Map<D,T>();
    
    add(direccion: D, tipo: T): void {
        this.vecinos.set(direccion,tipo);
    }
}