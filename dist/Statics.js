"use strict";
{
    // static
    class Counter {
        constructor() {
            this.count = 5;
        }
        increment() {
            return (this.count += 1);
        }
        decrement() {
            return (this.count -= 1);
        }
    }
    const instance1 = new Counter();
    console.log(instance1.increment()); //different memory
    const instance2 = new Counter();
    console.log(instance2.increment()); //different memory
    class Counter1 {
        static increment() {
            return (Counter1.count += 1);
        }
        static decrement() {
            return (Counter1.count -= 1);
        }
    }
    Counter1.count = 0;
    const instance11 = new Counter();
    console.log(Counter1.increment()); //same memory
    // const instance22 = new Counter();
    console.log(Counter1.increment()); //same memory
}
