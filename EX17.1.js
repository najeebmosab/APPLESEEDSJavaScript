var b = 1;
debugger;
function someFunction(number) {
    function otherFunction(input) {
        return b;
    }
    b = 5;
    return otherFunction;
}
var firstResult = someFunction(9);// log function other
var result = firstResult(2);// log b=5

console.log(firstResult);
console.log(result);

// ------------------------------------ //

var a = 1;
function b2() {
    a = 10;
    return;
    function a() { }
}
b2();
console.log(a);// log 1 function scoop not change a value

// ----------------------------- //
let i;
for (i = 0; i < 3; i++) {
    debugger;
    const log = () => {
        console.log(i); // log 0 - 1 - 2
    }
    setTimeout(log, 100);//log 0 - 1 - 2 to a fiew 100ms
}

/// i dont under stand what happen 