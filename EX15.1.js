// function getSum(arr1, arr2) {
//     const sum = 0;
//     for (let i = 0; i < arr1.length; i++) {
//         sum += arr1[i];
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         sum += arr2[i];
//     }
// }
// getSum([1, 2, 3][5, 66, 23]);

//1- getgetSum it's not send two array it's send one array;const sum = 0;
//2- i used my eyes to solved it  and debugger;
//3- line 2 becuse const it's not change;
//4- fixed code; 


function getSum(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }

    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }

    console.log(sum);
}

getSum([1, 2, 3],[5, 66, 23]);
