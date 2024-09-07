{
    // Polymorphisom

    class Person {
        getSleep(){
            console.log(`sleeping 8 hours`);
        }
    }

    class Student extends Person {
        getSleep(){
            console.log(`sleeping 7 hours`);
            
        }
    }
    class Developer extends Person {
        getSleep(){
            console.log(`sleeping 6 hours`);
            
        }
    }

    const getSleepingHours = (params: Person) => {
        params.getSleep();
    }

    const person1= new Person();
    const person2= new Student();
    const person3= new Developer();

    getSleepingHours(person1)
    getSleepingHours(person2)
    getSleepingHours(person3)
}