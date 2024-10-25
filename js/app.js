// Symbol ga oid:
const symbolText = Symbol('Hello!');
const myObject = {
    name: 'Muslimbek',
    age: 16,
    [symbolText]: 'Symbol qiymati'
};
const MainKeys = Object.keys(myObject);
console.log('Oddiy xususiyatlar:', MainKeys);
const symbolKeys = Object.getOwnPropertySymbols(myObject);
console.log('Symbol xususiyatlari:', symbolKeys);
const symbolValue = myObject[symbolText];
console.log('Symbol xususiyatining qiymati:', symbolValue);

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
class Car {
    constructor(model, year, color) {
        this.model = model
        this.year = year
        this.color = color
    }
}
let resultClass1 = new Car("BMW", 2024, "black")
console.log(resultClass1);