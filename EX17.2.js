(function immediateA(a) {
    return (function immediateB(b) {
        console.log(a);
    })(1);
})(0);//log 0

// i hope Explan
// ------------------------------- //

let count = 0;
(function immediate() {
    if (count === 0) {
        let count = 1;
        console.log(count);//log 1
    }
    console.log(count); // log 0
})();
// ---------------------------- //
var module = (function () {
    var foo = 'foo'
    function addToFoo(bam) {
        foo = bam;
        return foo;
    }
    var publicInterface = {
        bar: function () {
            return 'bar';
        },
        bam: function () {
            return addToFoo('bam')
        }
    }
    return publicInterface
})()
console.log(module.bar())//bar
console.log(module.bam())//bam
// i hope Explan
// ------------------------------ //

function createIncrement() {
    debugger
    let count = 0;
    function increment() {
        count++;
    }
    let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }
    return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

// i hope Explan
// ------------------------------ //

var x = 10;
console.log(x); //log 10
if (true) {
    (function () {
        var x = 20;
        console.log(x); // log 20
    })();
}
console.log(x); //log10


// --------------------------- //

var x = 10;
console.log(x); // log 10
function test() {
    var x = 20;
    console.log(x);//log 20
    if (x > 10) {
        let x = 30;
        console.log(x);// log 30
    }
    console.log(x);//log 20
}
test();
console.log(x);//log 10

// ---------------------- //
var x;
x = 10;
function test() {
    var x;
    if (x > 20) {
        x = 50;
    }
    console.log(x);//log undefind
}
test();

// ------------------------------------ //
function test() {
    var x, y;
    if (false) {
        x = 50;
    }
    console.log(x);//log undefind
    console.log(y);//log undefind
    y = 100;
    console.log(y);//100
}
test();

// ---------------------------------- //

function test() {
    foo();
    bar();//error
    function foo() {
        console.log('foo');//log foo
    }
    var bar = function () {
        console.log('bar');//not arrive
    }
}
test();
