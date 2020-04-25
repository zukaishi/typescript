abstract class Person {
    static species = 'Homo sapiencs';
    static isAdult(age: number ) {
        if(age > 17 ) {
            return true;
        }
        return false;
    }
    private readonly id: number = 32;
    constructor(public readonly name: string, protected age: number ) {
        this.id = 1;
    }
    incrementAge(){
        this.age++;
    }
    greeting ( this : Person) {
        console.log(`hello! my name is ${this.name}. I am ${this.age} years old.`);
        this.explainjob();
    }
    abstract explainjob () :void;
}
class Teacher extends Person{
    explainjob () {
        console.log(`I am a teachter and I teach ${this.subject}`)
    }
    get subject() : string{
        if( !this._subject ) {
            throw new Error('There is no subject.');
        }
        return this._subject;
    }
    set subject(  value: string ) {
        if( !value ){
            throw new Error('There is no value.')
        }
        this._subject = value;
    }
    constructor(name: string, age: number,public _subject: string ){
        super(name,age);
    }
    greeting () {
        console.log(`hello! my name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`);
    }
}
const teachter = new  Teacher('Quill',38,'Math');
teachter.greeting();
