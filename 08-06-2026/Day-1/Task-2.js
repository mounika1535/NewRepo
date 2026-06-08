// 1)Create examples using ternary operators.
//Check Positive or Negative
let num3=17
let resu=(num3>0) ? "Positive" : "Negative";
console.log(resu)

//Check Even or Odd
let num4=6
let resu1=(num4%2==0) ? "Even" : "Odd";
console.log(resu1);

//Check Voting Eligibility
let age = 15;
let status1 = age >= 18 ? "Eligible to Vote" : "Not Eligible";
console.log(status1);

//Find Larger Number
let u=2;
let v=6;
let larger = u>v ? "Larger" : "Smaller";
console.log(larger);

//Check Pass or Fail
let markss = 35;
let result3 = markss >= 35 ? "Pass" : "Fail";
console.log(result3);

//Nested Ternary for Grades
let marks2=80;
let grade =
    marks2 >= 90 ? "A":
    marks2 >= 80 ? "B":
    marks2 >= 70 ? "C":
    "Fail";
console.log(grade);

// 2)Compare ternary operators with if-else statements.
// If else
let age7 = 20;
let status3;
if (age7 >= 18) {
  status3 = "Adult";
} else {
  status3 = "Minor";
}
console.log(status3);
//Ternary
let age9 = 16;
let status4 = age9 >= 18 ? "Adult" : "Minor";
console.log(status4);

//if else
let age8 = 20;
if (age8 >= 18) {
  console.log("Adult");
  console.log("Can vote");
} else {
  console.log("Minor");
  console.log("Cannot vote");
}
//Ternary
age7 >= 18
  ? (console.log("Adult"), console.log("Can vote"))
  : (console.log("Minor"), console.log("Cannot vote"))

//if else
let score = 85;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("C");
}
//Ternary
let score1 = 85;
let grade4 =
  score1 >= 90 ? "A" :
  score1 >= 80 ? "B" :
  "C";
console.log(grade4);

// 3)Implement all loop types with practical examples.
//for loop
for (let i=1;i<=5;i++){
    console.log(i);
}
//Sum of first 5 numbers
let sum=0;
for (let i=1;i<=5;i++){
    sum += i;
}
console.log(sum);

//While loop
let i=1;
while(i<=5){
    console.log(i);
    i++;
}

//Do While loop
let j=1;
do{
    console.log(j);
    j++;
}while(j<=5);

//For of loop
let courses = ["HTML", "JS", "CSS"];
for (let course of courses) {
  console.log(course);
}
//string
let name9="Mounika";
for(let char of name9){
    console.log(char);
}

//For in loop
let person2 = {
  name: "Mouni",
  age: 25,
  city: "Vijayawasa"
};
for (let key in person2) {
  console.log(key + ": " + person2[key]);
}

//forEach()-->array
let numbers = [1, 2, 3, 4];
numbers.forEach(function(num) {
  console.log(num);
});
//Arrow function
let numbers1 = [1, 2, 3, 4];
numbers1.forEach(num => console.log(num));

// 4)Understand infinite loops and identify ways to prevent them.
// Infinite loop happens when:
// Condition never becomes false
// Counter is not updated
// Wrong logic is used
// Prevention rules:
// Always update loop variable
// Use correct conditions (<, >, <=)
// Use break when needed
// Add safety limits in complex loops