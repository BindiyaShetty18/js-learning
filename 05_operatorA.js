console.log("----------Step 1----------");

function squareOfWordLength(value){
    console.log(`Length of ${value} is : ${value.length}`);
    var result = value.length*value.length
    return result;
}
var resultValue = squareOfWordLength("JavaScript");
console.log(`Square of JavaScript is :`,resultValue);
console.log("---------------------------------------------------------");

var resultValue = squareOfWordLength("Google Chrome");
console.log(`Square of JavaScript is :`,resultValue);
console.log("---------------------------------------------------------");


var resultValue = squareOfWordLength("Developer Smart");
console.log(`Square of JavaScript is :`,resultValue);
console.log("---------------------------------------------------------");


console.log("----------Step 2----------");

function developer(){
    var name = "I am Angular Developer";
    console.log(`Length of the String ${name} is : ${name.length}` );
    var nameValue = name.split(" ");
    console.log(`Total number of words in ${name} is : ${nameValue.length}`);
    var result1 = name.length/nameValue.length;
    console.log("Division of both the String Length and Number of String Words are : ",result1);
    console.log("---------------------------------------------------------");
    var result2 = name.length*nameValue.length;
    console.log("Multiplication of both the String Length and Number of String Words are : ",result2);
}
developer();