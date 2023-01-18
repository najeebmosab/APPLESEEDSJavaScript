var x = 10;
console.log(x);//log 10
if (true) {
    var x = 20;
    console.log(x);//log 20 function scoop
}
console.log(x);//log 20 overrwrite

// --------------------------------------------- //

var x = 10;
console.log(x);//log 1
if (true) {
    (function () {
        var x = 20;
        console.log(x);//log 20
    })();
}
console.log(x);//log 10 not change beacuse a function scoop

// --------------------------------------------- //

var x = 10;
console.log(x);// log 10
function test() {
    var x = 20;
    console.log(x);//log 20
    if (x > 10) {
        let x = 30;
        console.log(x);//log 30
    }
    console.log(x);//log 20 let have small scoop than var
}
test();
console.log(x);//log 10 function scoop
// --------------------------------------------- //

var x;
x = 10;
function test() {
    var x;
    if (x > 20) {
        x = 50;
    }
    console.log(x);//undefinde 
}
test();

// ----------------------------------- //

function test() {
    var x, y;
    if (false) {
        x = 50;
    }
    console.log(x);//undefinde
    console.log(y);//undefinde
    y = 100;
    console.log(y);// log 100
}
test();


// ----------------------- //
function test() {
    foo();
    bar();// error we dont have a function in the name bar()
    // Function defiened
    // using function declaration
    function foo() {
        console.log('foo'); //log foo
    }
    // Function defined
    // using function expression
    var bar = function () {
        console.log('bar'); // log bar
    }
}
test();