

let person = {
    name: "Gajanan",
    city: "Pune",
    experience: 10
}
console.log(person);
console.table(person);

console.log(`Type of person is : ${typeof person}`);

console.log("----------------Accessing object Properties-----------");

let personCity = person["city"]; //[] Notation
console.log(`Person City is : ${personCity}`);

const personExp = person.experience; // . dot Notation
console.log(`Person experience is : ${personExp}`);

console.log("--------------Adding Properties in object-----------");

person.isMarried = true;
console.log(person);

console.log("--------------Delete Properties from an object-----------");
delete person.experience;
console.log(person);

console.log("--------------Creating an empty object-----------");
let address = {

}
address.pin = 112233;
console.log(address);

console.log("--------------Creating an method inside an object-----------");

const bankSbi = {
    name: "SBI Bank Wakad",
    city: "Pune",
    totalStaff: 90,
    homeLoanROI: 9.5,
    bankdetails: function() {
        console.log(`Bank Details : `);
        console.log(`Name : ${this.name}, City : ${this.city}, Total Staff : ${this.totalStaff}, Home Loan : ${this.homeLoanROI}`);
    }
}
bankSbi.bankdetails();

console.log("=============Nested Object()===============");
const jennyPerson = {
    name: "Jenny",
    age: 25,
    country: "USA",
    address: {
        flatNo: 102,
    floorNo: 3,
    street:"Bergen road",
    city: "LA",
    state: "ABC",
    getAddress: function() {
        const address = (``);
    }
    }
}
console.log(`Type of jennyPerson : ${typeof jennyPerson}`);
console.log(`Type of address : ${typeof address}`);

console.log(`City : ${jennyPerson.address.city}`);
jennyPerson.address.city = "XYZ";

delete jennyPerson.address.state;
