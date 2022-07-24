
export class Nodo <T> {
    vecinos: Array<T> = new Array<T>();

    add(nodo: T): void {
        this.vecinos.push(nodo);
    }
}