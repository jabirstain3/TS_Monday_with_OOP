"use strict";
{
    //implementation
    class Car1 {
        startEngine() {
            console.log("engine started");
        }
        stopeEngine() {
            console.log("engine stopped");
        }
        move() {
            console.log("car is moving");
        }
        test() {
            console.log("testing");
        }
    }
    //instace
    const toyotaCar = new Car1();
    toyotaCar.startEngine();
    // idea
    class Car2 {
        test() {
            console.log("testing");
        }
    }
    //implementation
    class ToyotaCar extends Car2 {
        startEngine() {
            console.log("engine started");
        }
        stopeEngine() {
            console.log("engine stopped");
        }
        move() {
            console.log("car is moving");
        }
    }
    //instance
    const hondaCar = new ToyotaCar();
    hondaCar.startEngine();
}
