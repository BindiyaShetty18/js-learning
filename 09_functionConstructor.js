function Person(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
}
Person.prototype.country = "Bharat";

const jenny = new Person("Jenny","Pune", 23);
console.log(`Name : ${jenny.name}, City : ${jenny.city}, Age : ${jenny.age}, Country :${jenny.country},`);
const bill = new Person("Bill","Mumbai", 32);
console.log(`Name :${bill.name}, City : ${bill.city}, Age : ${bill.age}, Country : ${bill.country},`);
const stew = new Person("Stew","LA", 52);
console.log(`Name : ${stew.name}, City : ${stew.city}, Age : ${stew.age}, Country : ${stew.country},`);
const elon = new Person("Elon","Delhi", 39);
console.log(`Name : ${elon.name}, City : ${elon.city}, Age : ${elon.age}, Country : ${elon.country},`);


// instanceof operator
const result = elon instanceof Person;
console.log(result);

const array = [2,4,6,8];
array.push(7);
console.log(array);