"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = 32;
        this.id = 1;
    }
    static isAdult(age) {
        if (age > 17) {
            return true;
        }
        return false;
    }
    incrementAge() {
        this.age++;
    }
    greeting() {
        console.log(`hello! my name is ${this.name}. I am ${this.age} years old.`);
        this.explainjob();
    }
}
Person.species = 'Homo sapiencs';
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    explainjob() {
        console.log(`I am a teachter and I teach ${this.subject}`);
    }
    get subject() {
        if (!this._subject) {
            throw new Error('There is no subject.');
        }
        return this._subject;
    }
    set subject(value) {
        if (!value) {
            throw new Error('There is no value.');
        }
        this._subject = value;
    }
    greeting() {
        console.log(`hello! my name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`);
    }
}
const teachter = new Teacher('Quill', 38, 'Math');
teachter.greeting();
