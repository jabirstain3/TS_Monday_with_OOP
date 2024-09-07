{   
    // class
    class Animal {
       // property
        name:string;
        species:string;
        sound: string;

       // constructor
        constructor(name: string, species: string, sound: string) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }

       // method
        makeSound() {
            console.log(this.sound);
        }
    }
    
    class Car{
        // perameter properties
        constructor(public model: string, public engin: string, public price: string){}
    }

    // create an instance of the class
    // object
    let dog = new Animal('Buddy', 'Dog', 'Woof');
    dog.makeSound();                              // Output: Woof
    let car = new Car('Toyota', 'V8', '$50000');
    console.log(car.model);                       // Output: Toyota
}