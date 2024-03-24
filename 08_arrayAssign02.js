const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];

console.log("Step 1 :- Array Given -",arrayNumbers);
console.log("Total elements available :",arrayNumbers.length);

console.log("Step 2 :- First element of the Given Array is :",arrayNumbers[0]);
console.log("Last element of the Given Array is :",arrayNumbers[10]);

console.log("Step 3 :- Third last element on the Given Aarray is :",arrayNumbers[arrayNumbers.length-3]);

function evenNumbers(arr){
   const evenNumbers = [];
   for (const number of arr) {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
   }
   return evenNumbers;
}
const findEvenNumbers = evenNumbers(arrayNumbers);
console.log("Step 4 :- Even numbers in the given Array [20,31,40,25,23,11,29,9,60,2,11] is :",findEvenNumbers);

function oddNumbers(array) {
    const oddNumbers = [];
    for (const Number of array) {
        if (Number % 2 !== 0) {
            oddNumbers.push(Number);
        }
    }
    return oddNumbers;
}
const findOddNumbers = oddNumbers(arrayNumbers);
console.log("Step 5 :- Odd numbers in the given Array [20,31,40,25,23,11,29,9,60,2,11] is :",findOddNumbers);

console.log("Step 6 :- Even positioned Array from the Given Array [20,31,40,25,23,11,29,9,60,2,11] are :",findEvenNumbers);
let sum = 0;
for (const element of findEvenNumbers) {
    sum = sum + element;
}
console.log(`Sum of Even positioned Array is :${sum}`);

console.log("step 7 :- Odd positioned Array from the given Array [20,31,40,25,23,11,29,9,60,2,11] are :",findOddNumbers);
let add = 0;
for (const element of findOddNumbers) {
    add = add + element;
}
console.log(`Sum of Odd positioned Array is : ${add}`);

let addition = 0;
console.log("Step 8 :- Given Array Numbers are",arrayNumbers);
for (const element of arrayNumbers) {
    addition = addition + element;
}
console.log(`Sum of all the given Array numbers is :${addition}`);

let multiplication = [];
console.log("Step 9 :- Given Array Numbers are",arrayNumbers);
for (const element of arrayNumbers) {
    if (element % 5 === 0) {
        multiplication.push(element);
    }
}
console.log("Numbers which are Multiple by 5 from the given array are :",multiplication);

console.log("Step 10 :- Given Array Numbers are",arrayNumbers);
const availableNumber = 115;
let isAvailable = false;
for (const element of arrayNumbers) {
    if (element === availableNumber) {
        isAvailable = true;
        break;
    }
}
if (isAvailable) {
    console.log(`Number ${availableNumber} is Available in Given Array`);
} else {
    console.log(`Number ${availableNumber} is Not Available in Given Array`);
}

console.log("Step 11 :- Given Array Numbers are",arrayNumbers);
const targetNumber = 23;
let numberAvailable = false;
for (const number of arrayNumbers) {
    if (number === targetNumber) {
        numberAvailable = true;
        break;
    }
}
if (numberAvailable) {
    console.log(`Number ${targetNumber} is Available in the Given Array`);
} else {
    console.log(`Number ${targetNumber} is Not Available in the Given Array`);
}

console.log("Step 12 :- Given Array Numbers are",arrayNumbers);
arrayNumbers.splice(3,0,55,66);
console.log("Inserted new numbers new Array list is :");
console.log(arrayNumbers);

console.log("Step 13 :- Given Array Numbers are",arrayNumbers);
var deleteElements = arrayNumbers.splice(4,3);
console.log("Deleted Elements are :",deleteElements);
console.log("Deleted 3 elements starting from index 4 :",arrayNumbers);