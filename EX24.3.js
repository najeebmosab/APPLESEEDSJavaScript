function myFilter(myCondition){
    const newArr=[];
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        if (myCondition(element)) {
            newArr.push(element);
        }
    }
    return newArr;
    console.log("none")
}

const arr = [1,2,3,4,5,6,7,8,9,10];
Object.assign(arr.__proto__,{myFilter})
console.log(arr.myFilter(el => el > 6));

function myFind(myCondition){
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        if (myCondition(element)) {
            return element;
        }
    }
    console.log("none")
}

const arrFind = [1,2,3,4,5,6,7,8,9,10];
Object.assign(arrFind.__proto__,{myFind})
console.log(arrFind.myFind((el) => {return el > 6}));

function myReduce(myCondition,start){
    debugger;
    console.log(myCondition);
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        start = myCondition(start,element);
            
        
    }
    return start;
    console.log("none")
}

const arrReduce = [1,2,3,4,5,6,7,8,9,10];
Object.assign(arrReduce.__proto__,{myReduce})
console.log(arrReduce.myReduce((curr,acurrVal)=>{
    
    return curr+=acurrVal;
},0));