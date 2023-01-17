const nums = [1,2,3,4,5,6,7,8,9,10];

// const MaxN = nums.reduce((max,n)=>{
//     return Math.max(max,n);
// });
// console.log(MaxN);


const sumEven = nums.reduce((a,b)=>{
    if (b%2===0) {
        return  a+b;
    }
    return a;
},0);
console.log(sumEven);

const avg = nums.reduce((a,b,c)=>{
    debugger
     (a+b)/c;
}) ;

console.log(avg/nums.length);