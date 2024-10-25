// // Symbol ga oid:
// const symbolText = Symbol('Hello!');
// const myObject = {
//     name: 'Muslimbek',
//     age: 16,
//     [symbolText]: 'Symbol qiymati'
// };
// const MainKeys = Object.keys(myObject);
// console.log('Oddiy xususiyatlar:', MainKeys);
// const symbolKeys = Object.getOwnPropertySymbols(myObject);
// console.log('Symbol xususiyatlari:', symbolKeys);
// const symbolValue = myObject[symbolText];
// console.log('Symbol xususiyatining qiymati:', symbolValue);

// //Rekursiv funksiyaga oid:
// // N1:
// function rescur1(numRescur1) {
//     if (numRescur1 <= 1) {
//         return 1;
//     }
//     return numRescur1 + rescur1(numRescur1 - 1);
// }

// console.log(rescur1(5));

// // N2:
// function rescur2(numRescur2) {
//     if (numRescur2 <= 1) {
//         return 1;
//     }
//     return numRescur2 * rescur2(numRescur2 - 1);
// }

// console.log(rescur2(5));

// // N3:
// function num3Reskur(resNum3Rescur) {
//     if (resNum3Rescur <= 0) {
//         return 0;
//     } else if (resNum3Rescur == 1) {
//         return 1;
//     }
//     return num3Reskur(resNum3Rescur - 1) + num3Reskur(resNum3Rescur - 2);
// }

// console.log(num3Reskur(5));

// // Class ga oid:
// // N1:
// class Car {
//     constructor(model, year, color) {
//         this.model = model
//         this.year = year
//         this.color = color
//     }
// }
// let resultClass1 = new Car("BMW", 2024, "black")
// console.log(resultClass1);

// // N2:
// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     getArea() {
//         return this.width * this.height;
//     }
// }

// let resultClass2 = new Rectangle(80, 60);
// let resultRealClass = resultClass2.getArea();
// console.log(resultRealClass);

//String metodlariga oid:
// ### 1. `charAt`
// N1:
function getCharAt(strNum1, indexNum1) {
    if (indexNum1 < strNum1.length) {
        return strNum1.charAt(indexNum1);
    } else {
        return "";
    }
}
console.log(getCharAt("Hello", 1));
console.log(getCharAt("Hello", 10));

// N2:
function getCharAt(strNum2) {
    if (strNum2.length > 0) {
        return strNum2.charAt(strNum2.length - 1);
    } else {
        return "";
    }
}
console.log(getCharAt("Hello"));

// N3:
function getCharAt(strNum3) {
    for (let i = 0; i < strNum3.length; i++) {
        console.log(strNum3.charAt(i));
    }
}
console.log(getCharAt("Hello!"));

// ### 2. `charCodeAt`
// N1:
function num1CodeCharAt(str, index) {
    if (index >= 0 && index < str.length) {
        return str.charCodeAt(index);
    } else {
        return "Indeks yaroqsiz";
    }
}
console.log(num1CodeCharAt("Hello", 1));
console.log(num1CodeCharAt("Hello", 10));

// N2:
function num2CodeCharAt(str) {
    let unicodeArray = [];
    for (let i = 0; i < str.length; i++) {
        unicodeArray.push(str.charCodeAt(i));
    }
    return unicodeArray;
}

console.log(num2CodeCharAt("Hello"));

// N3:
function num3CodeCharAt(str, index) {
    for (let i = index + 1; i <= index + 3 && i < str.length; i++) {
        console.log(str.charCodeAt(i));
    }
}

num3CodeCharAt("Hello World", 4);

// ### 3. `at`
// N1:
function Num1At(str, index) {
    return str.at(index);
}

console.log(Num1At("Hello", 1));
console.log(Num1At("JavaScript", 4));
console.log(Num1At("Hello", 10));

// N2:
function Num2At(str) {
    return str.at(-1);
}
console.log(Num2At("Hello"));
console.log(Num2At("JavaScript"));

// N3:
function Num3At(str, index) {
    return str.at(index);
}
console.log(Num3At("Hello", -1));
console.log(Num3At("JavaScript", -3));
console.log(Num3At("Test", -4));

// ### 4. `slice`
// N1:
function num1Slice(str) {
    return str.slice(0, 11)
}
console.log(num1Slice("JavaScript is one of the best programming languages."));

// N2:
function num2Slice(str) {
    return str.slice(0, 3);
}
console.log(num2Slice("Hello"));
console.log(num2Slice("JavaScript"));
console.log(num2Slice("world"));

// N3:
function num2Slice(str) {
    return str.slice(-5);
}
console.log(num2Slice("Hello world JavaScript"));

// ### 5. `substring`
// N1:
function num1Substring(str, startIndex, endIndex) {
    return str.substring(startIndex, endIndex);
}
console.log(num1Substring("Hello, World!", 0, 5));
console.log(num1Substring("JavaScript", 4, 10));
console.log(num1Substring("OpenAI", 2, 5));
// N2:
function num2Substring(str) {
    return str.substring(0, 4);
}
console.log(num2Substring("Hello"));
console.log(num2Substring("JavaScript"));
console.log(num2Substring("AI"));

// N3:
function num3Substring(str) {
    return str.substring(4);
}
console.log(num3Substring("Hello, World!"));
console.log(num3Substring("JavaScript is fun."));
console.log(num3Substring("AI"));

// ### 6. `substr`
// N1:
function num1Substr(str, startIndex) {
    return str.substr(startIndex, 3);
}
console.log(num1Substr("Hello, World!", 7));
console.log(num1Substr("JavaScript", 4));
console.log(num1Substr("AI", 0));

// N2:
function num2Substr(str) {
    let middleIndex = Math.floor(str.length / 2);
    return str.substr(middleIndex, 5);
}
console.log(num2Substr("Hello, World!"));
console.log(num2Substr("JavaScript"));
console.log(num2Substr("AI"));

// N3:
function num3Substr(str) {
    return str.substr(-4);
}
console.log(num3Substr("Hello, World!"));

// ### 7. `trim`, `trimStart`, `trimEnd`
// N1:
function num1Trim(str) {
    return str.trim();
}
const num1TrimRes = "   Hello, World!   ";
console.log(num1Trim(num1TrimRes));

// N2:
function num2Trim(str) {
    return str.trimStart();
}
const num2TrimRes = "   Hello, World!   ";
console.log(num2Trim(num2TrimRes));

// N3:
function num3Trim(str) {
    return str.trimEnd();
}
const num3TrimRes = "   Hello, World!   ";
console.log(num3Trim(num3TrimRes));