

const arrayMarks = [90,85,56,85,80,89];

const mapStudentMarks = new Map();
mapStudentMarks.set("Elon",90);
mapStudentMarks.set("Stew",85);
mapStudentMarks.set("Ratan",56);
mapStudentMarks.set("Jenny",85);
mapStudentMarks.set("Jiffer",80);
mapStudentMarks.set("Jimmy",89);

mapStudentMarks.set("Ratan",99); // Adding duplicate key
mapStudentMarks.set("Bindiya",85); // Adding Duplicate Value
console.table(mapStudentMarks);


console.log("==============Methods Of Map=================");
const jennyMarks = mapStudentMarks.get("Jenny");
console.log(`Jenny Marks : ${jennyMarks}`);

const isAvailable = mapStudentMarks.has("Jimmy");
console.log(`Is Key "Jimmy" Available :${isAvailable}`);

console.log(`Is key "Sundar" Available :${mapStudentMarks.has("Sundar")}`);

const total = mapStudentMarks.size;
console.log(`Size of map or total number of elements in the map is : ${total}`);

mapStudentMarks.delete("Bindiya");
console.table(mapStudentMarks);

console.log(mapStudentMarks.keys());
console.log(mapStudentMarks.values());

console.log("--------------------keys() and values() method-------------------");

const keys = mapStudentMarks.keys();
for (const iterator of keys) {
    console.log(iterator);
}

const values =  mapStudentMarks.values();
for (const iterator of values) {
    console.log(iterator);
}

console.log("--------------------Tarversing maps-------------------");
const keyMap = mapStudentMarks.keys();
for (const keys of keyMap) {
    const value = mapStudentMarks.get(keys);
    console.log(`Student Anme : ${keys} and Marks :${value}`);
}