console.log(`-----------------Step 1-----------------`);
const word = "I am very good IT Developer";
const vowels = "aeiou";
let vowelsCount = 0;

for (let index = 0; index < word.length; index++) {
    let char = word.charAt(index);
    let lowercase = char.toLowerCase();
    if (vowels.includes(lowercase)) {
        vowelsCount++;
    }
    
}
console.log(`Number of Vowels in the string are :` ,vowelsCount);

console.log(`-----------------Step 2-----------------`);
let sum = 0;
for (let index = 0; index <=5; index++) {
    sum = sum + index* index *index;
}
console.log(`Sum of the cube 5 is :`,sum);

console.log(`-----------------Step 3-----------------`);
// function oddPositionedChars(word){
//     for (let index = 0; index < word.length; index++) {
//         const element = word.charAt[index];
//         if (index%2!=0 && element !=" ") {
//             console.log(element);
//         }
        
//     }
// }

function oddPositionedChars(str) {
    for (let i = 0; i < str.length; i++) {
        if (i % 2 !== 0 && str[i] !== ' ') {
            console.log(str[i]);
        }
    }
}
const string1 = "Hard Work always pays back";
const string2 = "Soon I will be a UI IT Champ";

console.log("Odd positioned characters in string1:");
oddPositionedChars(string1);

console.log("\nOdd positioned characters in string2:");
oddPositionedChars(string2);