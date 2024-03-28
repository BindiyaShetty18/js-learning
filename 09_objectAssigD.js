let professor = {
    name: "Sanjana",
    city: "Mumbai",
    college: "VIIT",
    department: "Computer Science",
    subjectAssigned: "Angular",
    degrees: {
        juniorCollege: "Science",
        engineering: "CSC",
        masters: "M-Tech",
        PHD: "Adv Computing"
    },
    certificates: [
        'Hacker Rank participation', 
        'Certificate in IFE course', 
        'Certificate in Adv Programming'
    ]
}


console.log(`1.Properties given in Object Professor are : `);
console.log(professor);

console.log(`2.Include Nested object degrees :`);
console.log(professor.degrees);

console.log(`3.Add Array :`);
console.log(professor.certificates);

professor.totalExperience = 14;
console.log("4.Added new Property To Professor :");
console.log(professor);
console.log(`Total Experience : ${professor.totalExperience}`);

professor.city = "Pune";
console.log(`5.Modify the property :`,professor);

professor.certificates.splice(2,0,"Oracle Certified");
console.log(`6.Added new One Certificate :`,professor.certificates);

console.log(`7.Log the last element of the certificates :`,professor.certificates[3]);

console.log(`8.Complete Object :`,professor);
console.log(professor.degrees);
console.log(professor.certificates);

console.log(`9.Traverse Array - Certificates using for of loop :`);

for (let index = 0; index < professor.certificates.length; index++) {
    const element = professor.certificates[index];
    console.log(element);
}