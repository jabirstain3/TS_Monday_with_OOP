"use strict";
{
    // Type Gard
    // typeof
    /* (param1: Alphanumeric, param2: Alphanumeric) : Alphanumeric  */
    const add = (param1, param2) => {
        if (typeof param1 === 'number' && param2 === 'number') {
            return param1 + param2;
        }
        else {
            return param2.toString() + param2.toString();
        }
    };
    const getUser = (user) => {
        if ("role" in user) {
            console.log(user.name, user.role);
        }
        else {
            console.log(user.name);
        }
    };
    //instanceof 
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log("I am making sound");
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBark() {
            console.log("Bark Bark");
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMeaw() {
            console.log("Meaw Meaw");
        }
    }
    // smart way
    const isDog = (animal) => {
        return animal instanceof isDog;
    };
    const isCat = (animal) => {
        return animal instanceof isCat;
    };
    const geAnimal = (animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)) {
            animal.makeMeaw();
        }
        else {
            animal.makeSound();
        }
    };
    const dog = new Dog("Dog Bhai", "Dog");
    const cat = new Dog("Cat Bhai", "Cat");
}