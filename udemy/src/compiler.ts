function echo(message: string) :string | undefined{
    let hello = 'hello'
    if(message) {
        return message
    }
    return;
}
let implicitAny;
implicitAny = 'implicitAny'

let nullableMesage: string = 'hello';
echo.call(null,"test");
