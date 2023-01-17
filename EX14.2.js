const arr = [{ a: '1' }, { a: "2" }, { c: "3" }, { a: "4" }, { b: 1 }, { b: 2 }, { b: 3 }];


function extractOnlyValue(arr, key) {

    const newArr = arr.reduce((acc, currV) => {
        if (Object.keys(currV) == key) {

            console.log(currV[Object.keys(currV)]);
            acc.push(currV[Object.keys(currV)])
        }
        return acc;

    }, []);
    console.log(newArr);
    return newArr
}

extractOnlyValue(arr, 'a')


function countOnlyVowels(str) {
    const arrVowels = ['a', 'o', 'u', 'i', 'e'];
    const obj = arrVowels.reduce((acc, currV) => {
        for (let i = 0; i < str.length; i++) {
            const element = str[i];
            if (currV.toLocaleLowerCase() === element || currV.toUpperCase() === element) {
                acc[element] = acc[element] + 1 || 1;
            }
        }
        return acc;
    }, {});
    
    
    
}


countOnlyVowels("Mousab Abo Najeeb");


function addKeyAndValue(arr, newKey, newVal) {
    const newArr = arr.reduce((acc, curVal) => {
        debugger;
        let obj = curVal;
        obj[newKey] = newVal;
        
        acc.push(obj);
        
        return acc;
    }, []);

    console.log("new Arr",newArr);
}

addKeyAndValue(arr,'f',19)