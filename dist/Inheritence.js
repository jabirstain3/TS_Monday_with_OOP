"use strict";
{
    // Inheritence
    class Teacher {
        constructor(name, age, Address, designameion) {
            this.name = name;
            this.age = age;
            this.Address = Address;
            this.designameion = designameion;
        }
        classHours(hours) {
            console.log(`${hours} hours teachiong`);
        }
    }
    class Student extends Teacher {
        constructor(name, age, Address) {
            super(name, age, Address, "Student"); // mediam to send thr data to the parent
            this.name = name;
            this.age = age;
            this.Address = Address;
        }
        sleepHours(hours) {
            console.log(`${hours} hours sleeping`);
        }
    }
    //instene
    let student = new Student('John', '20', 'USA');
    let teacher = new Teacher('John', '20', 'USA', 'Maths');
}
