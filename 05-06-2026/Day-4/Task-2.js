//1)Continue operator practice with real-time examples.
//(Arithmetic):-
let Book = 500;
let quantity = 2;
let tCost = Book * quantity;
console.log("Total Cost:" + tCost);

//(Assignment):-
let salary = 5000;
salary += 2500;
salary -= 1000;
console.log("Total Salary:" +salary);

//(Comparison):-
let age=21;
vote = age<19;
console.log("Eligible for Vote:" + vote);

//(Logical AND):-
let username = true;
let password = false;
let loginsuccess = username && password;
console.log("Login Successful:", loginsuccess);

//(Logical OR):-
let Bookname = false;
let pages = true;
let published = Bookname || pages;
console.log("Published:", published);

//(Logical NOT):-
let status = false;
console.log("Avalibility:", !status);

//(Ternary)
let marks = 55;
let res5 = marks >= 35 ? "Pass" : "Fail";
console.log(res5);

//2)Implement template literals in JavaScript programs.
let fname = "Thatikonda";
let lname = "Mounika";
console.log(`Full Name: ${fname} ${lname}`);

let player = "Mounika";
let score = 85;
console.log(`Player: ${player}`);
console.log(`Score: ${score}`)
console.log(`Result: ${score>=85 ? "Wining" : "Losing"}`);

let ename = "Radhika";
let eid = 1098;
let role = "Associate";
console.log(`
    EmployeeName: ${ename}
    EmployeeId: ${eid}
    EmployeeRole: ${role}
`);

//3)Create dynamic string formatting examples.
let Name7 ="Mounika";
let age7 = 23;
console.log(`My Name is ${Name7} and I am ${age7} Years old.`)

let userName = "Mounika";
let loginCount = 10;
console.log(`Welcome back ${userName} You have logged in ${loginCount} times.`);

let id3 = 1098;
let name8 = "Mounika";
let department = "IT";
console.log(`| ${id3} | ${name8} | ${department} |`);

//4)Practice embedding variables inside template literals.
let Choclate = 150;
let quant = 3;
console.log(`Total Amount: ₹${Choclate * quant}`);

let employ = "Mounika";
let sala = 14000;
console.log(`${employ} earns ${sala} per month.`);

let city = "Vijayawada";
let state = "Andhra Pradesh";
console.log(`I live in ${city} ${state}`);

let item = "Book";
let price6 = 250;
let quantity2 = 4;
console.log(`Total Price: ${price6 * quantity2}`);