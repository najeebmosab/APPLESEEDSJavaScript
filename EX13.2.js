const foods = ["falafel", "sabich", "hummus",
    "pizza with extra pineapple"];

const resAsc = foods.sort();
console.log("resAsc", resAsc);

const resDec = foods.sort().reverse();
console.log("resDec", resDec);

const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
];

foodsWithUpperCase.sort();
console.log("foodsWithUpperCase ASC", foodsWithUpperCase);

foodsWithUpperCase.sort().reverse();
console.log("foodsWithUpperCase DEC", foodsWithUpperCase);

const words = ["apple",
    "supercalifragilisticexpialidocious",
    "hi", "zoo"
];

words.sort((word1,word2) => word2.length - word1.length);
console.log("words length Long to Short",words);


words.sort((word1,word2) => word1.length - word2.length);
console.log("words length Short to Long",words);