class Student {
    constructor(rollNumber, name, division) {
        this.rollNumber = rollNumber;
        this.name = name;
        this.division = division;
    }
    getDetails(){
        console.log(`Student Details => RollNumber : ${this.rollNumber}, Name : ${this.name}, Division : ${this.division}`);
    }
}
const bindiya = new Student(1,"Bindiya","A");
bindiya.getDetails();
const snehal = new Student(2,"Snehal","B");
snehal.getDetails();
const varsha = new Student(3,"Varsha","C");
varsha.getDetails();
