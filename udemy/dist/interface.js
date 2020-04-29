"use strict";
class Developer {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    greeting(message) {
        console.log('hello!');
    }
}
const user = new Developer('Quill', 38, 3);
