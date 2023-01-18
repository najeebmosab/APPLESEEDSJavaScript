// function findSmallest(a, b, c) {
//     if (a > b > c) {
//         return c;
//     } else if (a > c > b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(findSmallest(52, 66, 2));

//1- in calling a function findSmalest
//2- we need to fix if condition to return a true value and add more


function findSmallest(a, b, c) {
    debugger;
    if ((a > b && b > c )|| (a < b && a > c)) {
        return c;
    } else if ((a > c  && c > b) || (a < c  && a < b)) {
        return a;
    } else {
        return b;
    }
}
console.log(findSmallest(52, 66, 2));