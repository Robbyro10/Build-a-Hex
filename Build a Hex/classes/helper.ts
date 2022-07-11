class Person {
    balls: boolean;
    headshots: number;
    bitches: number;

    constructor(balls: boolean, headshots: number, bitches: number){
        this.balls = balls;
        this.headshots = headshots;
        this.bitches = bitches;
    }

    isGay(): boolean{
        if ((this.bitches)||(this.headshots)){
            return false;
        }
        else{
            return true;
        }
    }
}

let Bina: Person = new Person(false, 0, 0);
console.log(Bina.isGay);