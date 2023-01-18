// function countOccurrences(str, char) {
//     let counter = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i) === char) {
//             counter + 1;
//         }
//     } return counter;
// }
// countOccurrences("ini mini miny moe", "n");

//1- in line 5 is not save the chenge i mean is not add a one;

function countOccurrences(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            counter += 1;
        }
    } return counter;
}
countOccurrences("ini mini miny moe", "n");