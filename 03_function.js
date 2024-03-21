//1.Function with no argument and no return value 
function show() {
    console.log("Inside show function");
}
show();

//2.Function with arguments and no return value 
function add(n1,n2,n3){
    console.log("Arguments", n1,n2,n3);
    var result = n1+n2+n3;
    console.log("Addition is :",result);
}
add(3,6,7);
add(89.98,45,458963);
add(6,7);
add(16,74,56,41);
add("Hi", " Good ", "Morning");

//3.Function with arguments and return value
function substract(numOne,numeTwo){
    console.log("=====Substraction=====");
    console.log("Arguments",numOne,numeTwo);
    var result = numOne-numeTwo;
    return result;
}
var resultValue = substract(9,4);
console.log("result of substraction is :",resultValue);

var resultValue = substract(99,42);
console.log("result of substraction is :",resultValue);

function personalDetails(firstName, lastName, collegeName){

}
personalDetails("Bindiya","Shetty","MIT");0.
