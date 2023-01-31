// class Square {
//     constructor(a, b, c, d,) {
//         this.a = a;
//         this.b = b;
//         this.c = c;
//         this.d = d;
//     }

//     isSquare() {
//         debugger;
//         if (this.a == this.b && this.a == this.c && this.a == this.d && this.b == this.c && this.b == this.d && this.d == this.c) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
// }


// const sq = new Square(4, 4, 4, 4);
// console.log(sq.isSquare());

// const sq1 = new Square(1, 2, 3, 4);
// console.log(sq1.isSquare());


const Square = function (a, b, c, d,) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

const isSquare = function () {
    if (this.a == this.b && this.a == this.c && this.a == this.d && this.b == this.c && this.b == this.d && this.d == this.c) {
        return true;
    }
    else {
        return false;
    }
}

// Object.setPrototypeOf(sqF1,{isSquare});
const sqF1 = new Square(4,4,4,4);
Object.assign(sqF1.__proto__ , {isSquare})
// sqF1.__proto__ = isSquare.prototype;
// console.log(sqF1.__proto__)
// console.log(isSquare.prototype)
console.log(sqF1.isSquare());