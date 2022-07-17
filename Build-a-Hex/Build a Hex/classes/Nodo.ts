
export class Nodo {
    vecinos: Array<Nodo> = new Array<Nodo>();

    add(nodo: Nodo): void {
        this.vecinos.push(nodo);
    }
}