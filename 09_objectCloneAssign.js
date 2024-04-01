const bankSbi =  {
        bankName: "SBI",
        branch: "Pimple Gurav",
        address: "Pimpri",
        ifsc: "123456",
        pin: "411056"
}

console.log("1. Create the object name - bankSbi with atleast 4 properties");
//console.log(bankSbi); 
console.table(bankSbi);

const bankLocation = {
    street: "Pimpri-Chinchwad",
    city: "Pune",
    pincode: "411061"
}

console.log("2. Create a object named bankLocation with properties");
console.table(bankLocation);

console.log("3. Clone Step 1 and Step 2 ");
const cloneObject = Object.assign({},bankSbi,bankLocation);
console.table(cloneObject);

const rateOfInterest = {
    homeLoanInterest: "10%",
    personalLoanInterest: "20%",
    duelInterest: "30%"
}
console.log("4. Create a object named rateOfInterest with properties");
console.table(rateOfInterest);

console.log("5. Merge step1 , step2 and step4");
const sbiDetails = Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.table(sbiDetails);

console.log("6. Traverse step5 details using for in loop");
console.log(sbiDetails);
for (let key in sbiDetails) {
    if (sbiDetails.hasOwnProperty(key)) {
      console.log(`${key}: ${sbiDetails[key]}`);
    }
  }
