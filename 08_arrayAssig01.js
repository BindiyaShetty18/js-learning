const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Watermelon"];
console.log("1.First Element is :",fruits_seasonal[0]);
console.log("Last Element is :",fruits_seasonal[fruits_seasonal.length-1]);

console.log("-----------------------------------------------------------------------------------------------------");
fruits_seasonal.unshift("Papaya");
console.log("2. Added element 'Papaya':- ");
console.log(fruits_seasonal);


console.log("-----------------------------------------------------------------------------------------------------");
fruits_seasonal.splice(4,1);
console.log("3.Removed Mango from array :-");
console.log(fruits_seasonal);


console.log("-----------------------------------------------------------------------------------------------------");
fruits_seasonal.push("Pineapple");
console.log("4.Added last element to the array :-");
console.log(fruits_seasonal);

console.log("-----------------------------------------------------------------------------------------------------");
fruits_seasonal.splice(4,0,"Dragon Fruit");
console.log("5.Added 'Dragon Fruit' before WaterMelon");
console.log(fruits_seasonal);

console.log("-----------------------------------------------------------------------------------------------------");
fruits_seasonal.splice(2,1,"Kiwi");
console.log("6.Replace 'Orange' with 'Kiwi':-");
console.log(fruits_seasonal);

console.log("-----------------------------------------------------------------------------------------------------");
console.log("7.Log the elements starting from index 1 to 4 :-");
console.log(fruits_seasonal[1]);
console.log(fruits_seasonal[2]);
console.log(fruits_seasonal[3]);
console.log(fruits_seasonal[4]);

console.log("-----------------------------------------------------------------------------------------------------");
console.log("8.Log last three elements :-");
console.log(fruits_seasonal[fruits_seasonal.length-3]);
console.log(fruits_seasonal[fruits_seasonal.length-2]);
console.log(fruits_seasonal[fruits_seasonal.length-1]);