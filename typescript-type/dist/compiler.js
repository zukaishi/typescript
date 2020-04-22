"use strict";
function echo(message) {
    let hello = 'hello';
    if (message) {
        return message;
    }
    return;
}
let implicitAny;
implicitAny = 'implicitAny';
let nullableMesage = 'hello';
echo.call(null, "test");
