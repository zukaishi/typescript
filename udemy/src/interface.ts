interface  Human  {
    name: string;
    age:number;
    greeting(message: string) :void;
}
class Developer implements Human{
    constructor(public name: string, public age: number, public experience: number ){ }
    greeting(message: String ){
        console.log('hello!');
    }
}