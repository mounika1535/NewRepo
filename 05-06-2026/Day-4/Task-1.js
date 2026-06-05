//1)Practice arithmetic, assignment, comparison, and logical operators.
//(Arithmetic):-
let a5 = 12;
let b5 = 10;
console.log(a5 + b5);
console.log(a5 - b5);
console.log(a5 * b5);
console.log(a5 / b5);
console.log(a5 % b5);
console.log(a5 ** b5);

//(Assignment):-
let a6 = 10;
a6 += 5;
console.log(a6);
a6 *= 2;
console.log(a6);
a6 -= 10;
console.log(a6);

//(Comparison):-
console.log(10 == "10");
console.log(20 === "20");
console.log(30 > 8);
console.log(50 < 75);
console.log(8 <= 4);
console.log(10 >= 5);
console.log(15 != 16);
console.log(20 !== 20);

//(Logical):-
let age = 38;
let statement= true;
console.log(age >= 18 && statement);
console.log(age < 18 || statement);
console.log(!statement);

//2)Create JavaScript programs using different operators.
//(Increment and Decrement)
let count = 10;
count++;
console.log("After Increment:", count);
count1=20
count1--;
console.log("After Decrement:", count1);

//(Ternary)
let marks = 90;
let result = marks >= 35 ? "Pass" : "Fail";
console.log(result);

//(String Concatenation)
let firstName = "Thatikonda";
let lastName = "Mounika";
console.log(firstName + " " + lastName);

let salary = 14000;
let bonus = 1000;
salary += bonus;
let eligibleForLoan = salary > 30000 && salary < 50000;
console.log("Total Salary:", salary);
console.log("Eligible for Loan:", eligibleForLoan);
let status = salary >= 35000 ? "Good Income" : "Average Income";
console.log("Status:", status);

//3)Understand operator precedence and execution flow.
//Parentheses → Arithmetic → Comparison → Logical → Assignment
let res = 5 + 3 * 2;
console.log(res);
let res1 = (10 + 2) * 2;
console.log(res1);
let res2 = 10 + 5 > 12;
console.log(res2);
let res3 = false || true && true;
console.log(res3);
let x;
x = 5 + 2 * 2;
console.log(x);
let res4 = 5 + 3 * 2 > 10 && 9 === 9;
console.log(res4);