{
    // Inheritence
    class Teacher  {  //parent class
        constructor(public name: string, public age: string, public Address: string, public designameion: string) { }

        classHours(hours: string){
            console.log(`${hours} hours teachiong`);            
        }
    }


    class Student extends Teacher{  //child class
        constructor(public name: string, public age: string, public Address: string) {
            super(name, age, Address, "Student"); // mediam to send thr data to the parent
        }

        sleepHours(hours: string){
            console.log(`${hours} hours sleeping` );            
        }
    }

    

    //instene
    let student = new Student('John', '20', 'USA');
    let teacher = new Teacher('John', '20', 'USA', 'Maths');
}