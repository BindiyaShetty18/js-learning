console.log("=======Step 1 =======");

var result = function greaterNumber(arg1,arg2){
   
   var res = arg1>arg2 ? "10 is greater than -10" : "-10 is greater than 10";
   console.log(res) ;
      
}
result(10,-10);
result(800,899);

console.log("=========Step 2========");

var check = function isEvenOrOddNum(arg){
   var result = arg%2==0 ? "It is an even no : TRUE" : "It is an odd no : FAlSE"
  console.log(`The given number ${arg} is : ${result}`);
}
check(29);
check(44);
check(0);
check(101);

console.log("=========Step 3========");

var word = function wordLength(arg){
  
   var result = arg.length%2==0 ? "EVEN" : "ODD";
   console.log(`Given arg ${arg} is with ${result} length`);
   
}
word("JavaScript");
word("developer");
word("Google");