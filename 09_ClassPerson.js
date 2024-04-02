console.log("---------With using data members in class-----------");

class Person {
    name
    city 
    age

    constructor(myName, myCity, myAge) {
        this.name = myName;
        this.city = myCity;
        this.age = myAge;
    }
    detail(){
        console.log(`Person Details => Name : ${this.name}, City : ${this.city}, Age : ${this.age}`);
    }
}
const jenny = new Person("Jenny","Pune",22);
// console.log(jenny);
jenny.detail();

const bill = new Person("Bill","Mumbai",23);
// console.log(bill);
bill.detail();

const elon = new Person("Elon","LA",38);
// console.log(elon);
elon.detail();



console.log("---------Without using data members in class-----------");
class NPerson {

    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }
    detail(){
        console.log(`Person Details => Name : ${this.name}, City : ${this.city}, Age : ${this.age}`);
    }
}
const Jenny = new NPerson("Jenny","Pune",22);
// console.log(jenny);
Jenny.detail();

const Bill = new NPerson("Bill","Mumbai",23);
// console.log(bill);
Bill.detail();

const Elon = new NPerson("Elon","LA",38);
// console.log(elon);
Elon.detail();

console.log("---------------------Traversing array object----------------------");
const array = [Jenny, Bill, Elon];
for (const element of array) {
    element.detail();
}

