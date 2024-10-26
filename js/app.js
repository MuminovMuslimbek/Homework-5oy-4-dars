// Qoshimcha: inputda parolni ko`ra olish va ko`ra olmaslik
let img = document.querySelector("img");
let inp = document.querySelector("input");

let i = 0;

img.addEventListener("click", () => {
    i++;
    if (i % 2 != 0) {
        inp.type = "text";
        img.src = "./img/yes.png";
    } else {
        inp.type = "password";
        img.src = "./img/no.png";
    }
});

// Symbol ga oid:
let id = Symbol()

let car = {
    name: "Mercedes",
    year: 2024,
    weight: 2000,
    [id]: 123
}
console.log(Object.entries(car));


//Rekursiv funksiyaga oid:
// N1:
function rescur1(numRescur1) {
    if (numRescur1 <= 1) {
        return 1;
    }
    return numRescur1 + rescur1(numRescur1 - 1);
}

console.log(rescur1(5));

// N2:
function rescur2(numRescur2) {
    if (numRescur2 <= 1) {
        return 1;
    }
    return numRescur2 * rescur2(numRescur2 - 1);
}

console.log(rescur2(5));

// N3:
function num3Reskur(resNum3Rescur) {
    if (resNum3Rescur <= 0) {
        return 0;
    } else if (resNum3Rescur == 1) {
        return 1;
    }
    return num3Reskur(resNum3Rescur - 1) + num3Reskur(resNum3Rescur - 2);
}

console.log(num3Reskur(5));

// Class ga oid:
// N1:
class Car {
    constructor(model, year, color) {
        this.model = model
        this.year = year
        this.color = color
    }
}
let resultClass1 = new Car("BMW", 2024, "black")
console.log(resultClass1);

// N2:
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

let resultClass2 = new Rectangle(80, 60);
let resultRealClass = resultClass2.getArea();
console.log(resultRealClass);

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

// ### 8. `padEnd`, `padStart`
// N1:
function Num1PadEnd(str) {
    return str.padEnd(10, "!")
}
const Num1PadEndRes = "Hello";
console.log(Num1PadEnd(Num1PadEndRes));

// N2:
function Num2PadEnd(str) {
    return str.padStart(15, "@")
}
const Num2PadEndRes = "Hello";
console.log(Num2PadEnd(Num2PadEndRes));

// N3:
let Num3PadEnd = "12345"
let resultNum3PadEnd = Num3PadEnd.padStart(8, "0")
console.log(resultNum3PadEnd);

//  ### 9. `repeat`
// N1:
function Num1Repeat(str) {
    return str.repeat(3)
}
const Num1RepeatRes = "Hello";
console.log(Num1Repeat(Num1RepeatRes));

// N2:
function Num2Repeat(str) {
    let Num2Repeat2 = ""
    for (let i = 0; i < str.length; i++) {
        Num2Repeat2 += str[i].repeat(2)
    }
    return Num2Repeat2
}
const Num2RepeatRes = "Hello";
console.log(Num2Repeat(Num2RepeatRes));

// N3:
function Num3Repeat(str) {
    return str.repeat(5)
}
const Num3RepeatRes = "Hello";
console.log(Num3Repeat(Num3RepeatRes + ", "));

// ### 10. `replace`
// N1:
function Num1Replace(str) {
    return str.replace("world", "JavaScript")
}
const Num1ReplaceRes = "Hello world";
console.log(Num1Replace(Num1ReplaceRes + "!"));

// N2:
function Num2Replace(str) {
    return str.replace("i", "iii")
}
const Num2ReplaceRes = "JavaScript is one of the best programming languages.";
console.log(Num2Replace(Num2ReplaceRes));

// N3:
function Num3Replace(str) {
    return str.replace(/\d/, "*")
}
const Num3ReplaceRes = "JavaScript is 1 of the best programming languages.";
console.log(Num3Replace(Num3ReplaceRes));

// ### 11. `replaceAll`
// N1:
function Num1ReplaceAll(str) {
    return str.replaceAll("a", "o")
}
const Num1ReplaceAllRes = "JavaScript is 1 of the best programming languages.";
console.log(Num1ReplaceAll(Num1ReplaceAllRes));

// N2:
function Num2ReplaceAll(str) {
    let resNum2ReplaceAll = str.toLowerCase()
    return resNum2ReplaceAll.replaceAll("good", "great")
}
const Num2ReplaceAllRes = "This is a good book. Good students get good grades.";
console.log(Num2ReplaceAll(Num2ReplaceAllRes));

// N3:
function Num3ReplaceAll(str) {
    return str.replaceAll(/\d/g, "*")
}
const Num3ReplaceAllRes = "Telefon raqami: 99891-111-56-47";
console.log(Num3ReplaceAll(Num3ReplaceAllRes));

// ### 12. `split`
// N1:
function Num1Split(str) {
    return str.split(",")
}
const Num1SplitRes = "apple,banana,apelsin,granat";
console.log(Num1Split(Num1SplitRes));

// N2:
function Num2Split(str) {
    return str.split("")
}
const Num2SplitRes = "apple,banana,apelsin,granat";
console.log(Num2Split(Num2SplitRes));

// N3:
function Num3Split(str) {
    return str.split(" ")
}
const Num3SplitRes = "apple banana apelsin granat";
console.log(Num3Split(Num3SplitRes));

// ### 13. `indexOf`
// N1:
function Num1IndexOf(str) {
    return str.indexOf("world")
}
const Num1IndexOfRes = "Hello world!";
console.log(Num1IndexOf(Num1IndexOfRes));

// N2:
function Num2IndexOf(str) {
    return str.indexOf("world")
}
const Num2IndexOfRes = "JavaScript is one of the best programming languages.";
console.log(Num2IndexOf(Num2IndexOfRes));

// N3:
function Num3IndexOf(str) {
    return str.indexOf("i")
}
const Num3IndexOfRes = "JavaScript is one of the best programming languages.";
console.log(Num3IndexOf(Num3IndexOfRes));

// ### 14. `lastIndexOf`
// N1:
function Num1LastIndexOf(str) {
    return str.lastIndexOf("i")
}
const Num1LastIndexOfRes = "JavaScript is one of the best programming languages.";
console.log(Num1LastIndexOf(Num1LastIndexOfRes));

// N2:
function Num2LastIndexOf(str) {
    return str.lastIndexOf(" ")
}
const Num2LastIndexOfRes = "JavaScript is one of the best programming languages.";
console.log(Num2LastIndexOf(Num2LastIndexOfRes));

// N3:
let num1TextLastIndexOf = "Bugun 123 raqami 4567 raqami 8";
let lastIndex = -1;

for (let i = 0; i <= 9; i++) {
    let index = num1TextLastIndexOf.lastIndexOf(i);
    if (index > lastIndex) {
        lastIndex = index;
    }
}

console.log(lastIndex);

// ### 15. `includes`
// N1:
function Num1Includes(str, find) {
    return str.includes(find)
}
const Num1IncludesRes = "JavaScript is one of the best programming languages.";
let num1Includes = "programming"
console.log(Num1Includes(Num1IncludesRes, num1Includes));

// N2:
function Num2Includes(str) {
    for (let i = 0; i <= 9; i++) {
        if (str.includes(i.toString())) {
            return true;
        }
    }
    return false;
}
const Num2IncludesRes = "JavaScript is 1 of the best programming languages.";
console.log(Num2Includes(Num2IncludesRes));

// N3:
function Num3Includes(str) {
    for (let char of str) {
        if (char.toLowerCase() !== char.toUpperCase()) {
            return true;
        }
    }
    return false;
}
const Num3IncludesRes = "JavaScript is 1 of the best programming languages.";
console.log(Num3Includes(Num3IncludesRes));