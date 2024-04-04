console.log("Step 1: Put this json in backtick");
const person = 
{
    "name" : "Aleix Melon",
    "id" : "E00254",
    "role" : ["Dev", "DBA"],
    "age" : 23,
    "doj" : "11-12-2019",
    "married" : false,
    "address" : {
        "street" : "32,  Laham St.",
        "city" : "Innsbruck",
        "country" : "Austria"
    },
    "referred-by" : "E0012"
}

const personDetails = `
{
    "name" : "Aleix Melon",
    "id" : "E00254",
    "role" : ["Dev", "DBA"],
    "age" : 23,
    "doj" : "11-12-2019",
    "married" : false,
    "address" : {
        "street" : "32,  Laham St.",
        "city" : "Innsbruck",
        "country" : "Austria"
    },
    "referred-by" : "E0012"
}
`
console.log(personDetails);
console.log("Step 2 : Convert this json one to object ");
console.log(`Type of persondetails is: ${typeof personDetails}`);
const personObject = JSON.parse(personDetails);
console.log(`After converting to object typeof persondetails is : ${typeof personObject}`);

console.log("Step 3 : Log on console log Dev : ");
console.log(person.role[0]);

console.log("Step 4 : Log only last name Melon :");
const fullname = person.name.split(' ')[1];
console.log(fullname);

console.log("Step 5 : Log only joining year of employee :");
const date = person.doj.split('-')[2];
console.log(date);