//1)Practice reference(non-primitive) data types with examples.
//object
let emp = {
    eid: 1098,
    ename: "mouni",
    role: "Ase"
};
console.log(emp);
console.log(emp.ename);
console.log(emp.role);

//Array
let Fruits = ["Apple", "Mango", "Grape"];
console.log(Fruits);
console.log(Fruits[1]);
console.log(Fruits[2]);

//Function
function sal(name,days) {
    var perday=2000
    console.log("monthly salary of" ,name, "is" ,perday*days)
}
sal("mouni",20)

//Date
let today = new Date();
console.log(today);

//map
let student = new Map();
student.set(1097, "kalla");
student.set(1098, "harika");
console.log(student.get(1097));
console.log(student.size);

//set
let B = new Set();
B.add(10);
B.add(20);
B.add(10);
B.add(30);
console.log(B);
console.log(B.size);

//2)Implement typeof operator in sample programs.
//string
let  sname= "vinni";
console.log("Sname:", sname);
console.log(typeof sname);

//number
let age3 = 21;
console.log("Age:", age3);
console.log(typeof age3);

//boolean
let isgoing = true;  
console.log("Is Going:", isgoing);      
console.log(typeof isgoing);

//undefined
let N3;
console.log("N:", N3);
console.log(typeof N3);

//null
let pn3 = null;
console.log("Pn:", pn3);
console.log(typeof pn3);

//array
let Fruits1 = ["Banana", "Apple", "Mango"];
console.log("Fruits:", Fruits1);
console.log(typeof Fruits1);

//3)Understand ES6(ECMASCRIPT6 6TH EDITION) datatype concepts.

//4)Create comparison examples between primitive and reference data types.
//Assignment Behavior
//(primitive datatype):
let a1 = 10;
let b1 = a1;
b1 = 20;
console.log(a1);
console.log(b1);
//(reference datatype):
let p1 = {
  name: "mouni"
};
let p2 = p1;
p2.name = "vinni";
console.log(p1.name);
console.log(p2.name);
//Equality Comparison
//(primitive datatype):
let x = 5;
let y = 5;
console.log(x === y);
//(reference datatype):
let obj1 = { age: 23 };
let obj2 = { age: 23 };
console.log(obj1 === obj2);