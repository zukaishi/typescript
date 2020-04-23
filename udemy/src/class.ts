class Person {
    constructor(public name: string, private age: number ) {
    }
    incrementAge(){
        this.age++;
    }
    greeting ( this : Person) {
        console.log(`hello! my name is ${this.name}. I am ${this.age} years old.`);
    }
}

const quill = new Person("Quill",38);
quill.greeting();