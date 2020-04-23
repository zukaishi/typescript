class Person {
    name: string;

    constructor(initName: string) {
        this.name = initName;
    }

    greeting () {
        console.log(`hello! my name is ${this.name}`);
    }
}

const quill = new Person("Quill");
quill.greeting();
const antherQill = {
    antherGreeting: quill.greeting
}
antherQill.antherGreeting();
