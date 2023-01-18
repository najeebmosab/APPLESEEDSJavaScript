// function calcAverage(arr) {
//     var sum;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     } return sum;
// }
// calcAverage([85, 90, 92])

//1- the problem is we are not start a sum with zero 0 value;
//2- the problem is we return a sum without divided it with length of array;
//3- must log a resul because we need to see it

//fix it

function calcAverage(arr) {
    //add defult value is 0
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    } 
    //after loop we add divid with length of array;
    return sum / arr.length;
}
//add log
console.log(calcAverage([85, 90, 92]));