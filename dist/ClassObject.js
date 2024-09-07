"use strict";
{
    // class
    class Animal {
        // constructor
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        // method
        makeSound() {
            console.log(this.sound);
        }
    }
    class Car {
        // perameter properties
        constructor(model, engin, price) {
            this.model = model;
            this.engin = engin;
            this.price = price;
        }
    }
    // create an instance of the class
    // object
    let dog = new Animal('Buddy', 'Dog', 'Woof');
    dog.makeSound(); // Output: Woof
    let car = new Car('Toyota', 'V8', '$50000');
    console.log(car.model); // Output: Toyota
}
