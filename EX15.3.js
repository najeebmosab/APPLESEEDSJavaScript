// function getSumOfEven(arr) {
//     return arr[2] + arr[4] + arr[6] + arr[8] +
//         arr[10];
// }
// getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//1- we read to the fales index
//2- we to log a result


//fix it

function getSumOfEven(arr) {
    return arr[2-1] + arr[4-1] + arr[6-1] + arr[8-1] +
        arr[10-1];
}
console.log(getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
