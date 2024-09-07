{
    // abstraction with interface

    //idea
    interface Vehical1 {
        // name: string;
        // model: number
        startEngine(): void;
        stopeEngine(): void;
        move(): void
    }

    //implementation
    class Car1 implements Vehical1 {
        startEngine(): void {
            console.log("engine started");
        }
        stopeEngine(): void {
            console.log("engine stopped");
        }
        move(): void {
            console.log("car is moving");
        }

        test(){
            console.log("testing");
        }
    }

    //instace
    const toyotaCar = new Car1();
    toyotaCar.startEngine();

    // idea
    abstract class Car2 {
        abstract startEngine(): void 
        abstract stopeEngine(): void
        abstract move(): void 
        test(){
            console.log("testing");
        }
    }

    //implementation
    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log("engine started");
            }
        stopeEngine(): void {
            console.log("engine stopped");
        }
        move(): void {
            console.log("car is moving");
        }
    }

    //instance
    const hondaCar = new ToyotaCar();
    hondaCar.startEngine();
}