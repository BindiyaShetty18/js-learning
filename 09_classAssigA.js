console.log("-----------------------------Step 1------------------------------");
console.log("Vechicle Details :");
class Vechicle {
    
    constructor(vechicleName, vechicleNumber, vechicleType, vechicleRegistrationDate, vechicleColour) {
        this.vechicleName = vechicleName;
        this.vechicleNumber = vechicleNumber;
        this.vechicleType = vechicleType;
        this.vechicleRegistrationDate = vechicleRegistrationDate;
        this.vechicleColour = vechicleColour;
    }
    details() {
        // console.log(`Vechicle Details => Name : ${this.vechicleName}, Number : ${this.vechicleNumber}, Type : ${this.vechicleType}, RegistrationDate :${this.vechicleRegistrationDate}, Colour : ${this.vechicleColour}`);
        
        console.log("----------------------------------------------------");
        console.log(`Name : ${this.vechicleName}`);
        console.log(`Number : ${this.vechicleNumber}`);
        console.log(`Type Of Vechicle : ${this.vechicleType}`);
        console.log(`Resistration Date : ${this.vechicleRegistrationDate}`);
        console.log(`Colour : ${this.vechicleColour}`);
    }
}
const tvs = new Vechicle("Jupyter",41852,"TvsScooty","20/01/2023","Grey");
//tvs.details();
const honda = new Vechicle("Activa",45896,"HondaScooty","22/10/2020","White");
//honda.details();
const enfield = new Vechicle("Royal Enfield",56201,"EnfieldBike","18/03/2019","Black");
//enfield.details();
const mahindra = new Vechicle("Jawa",14140,"MahindraBike","15/02/2018","Red-Black");
//mahindra.details();
const yamaha = new Vechicle("Fascino",181512,"Yamaha","12/11/2021","Blue");
//yamaha.details();

const arrayOfVechicles = [tvs, honda, enfield, mahindra, yamaha];
for (const element of arrayOfVechicles) {
    element.details();
}


console.log("-----------------------------Step 2------------------------------");

class College {
    constructor(collegeName, city, pincode, totalStudents) {
        this.collegeName = collegeName;
        this.city = city;
        this.pincode = pincode;
        this.totalStudents = totalStudents;
    }
    display() {
        console.log(`CollegeName : ${this.collegeName}, City : ${this.city}, Pincode : ${this.pincode}, TotalStudents : ${this.totalStudents}`);
    }
}
const modern = new College("Modern College", "Pune", 411023, 6000);
modern.display();
const mit = new College("MIT-WPU","Kothrud",411056, 15000);
mit.display();
const sinhagad = new College("Sinhagad College", "Narhe-Ambegaon", 456200, 9000);
sinhagad.display();
const university = new College("Pune University", "GaneshKhind", 452136, 10000);
university.display();