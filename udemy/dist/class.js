"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        this.age++;
    }
    greeting() {
        console.log(`hello! my name is ${this.name}. I am ${this.age} years old.`);
    }
}
const quill = new Person("Quill", 38);
quill.greeting();
