// function funcA() {
//     console.log(a);
//     console.log(foo());
//     var a = 1;
//     function foo() {
//         return 2;
//     }
// }
// funcA();
// the problem is in line 2 it log undefind
// fix it

function funcA() {
    console.log(foo());
    var a = 1;
    console.log(a);
    function foo() {
        return 2;
    }
}
funcA();
// ---------------------------------------------------------------------//

var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return this.fullName;
        }
    }
};
console.log(obj.prop.getFullName());//log a Aurelio De Rosa beacuse we return a this.fullName;
var test = obj.prop.getFullName;//log a function;
console.log(test());//log an undefined beacuse we Dont have a function heare name test();


// ---------------------------------------------------------------------//
function funcB() {
    let a = b = 0;
    a++;
    return a;
}
funcB();
console.log(typeof a); // undefined beacuse a function scoop of let it's limited by {} of function
console.log(typeof b); // number
// ---------------------------------------------------------------------//

function funcC() {
    console.log("funcC", "1");
}
funcC();// log 2 becuase overwrite
function funcC() {
    console.log("funcC", "2");
}
funcC(); // log 2


// ---------------------------------------------------------------------//

function funcD1() {
    d = 1;
}
funcD1();
console.log(d);// log 1
function funcD2() {
    var e = 1;
}
funcD2(); 
// console.log(e);// log error because function scoop


// ---------------------------------------------------------------------//


function funcE() {
    console.log("Value of f in local scope: ", f);// log 1 beacuse global scope;
}
console.log("Value of f in global scope: ", f);// log undefined beacuse a log came before a var f ;
var f = 1;
funcE();