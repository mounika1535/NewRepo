//1)Truthy and Falsy values
//Falsy
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

//Truthy
console.log(Boolean("hello"));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean("0"));

//2)Conditional Statements
//if Statement
let age5 = 19;
if(age5>=18){
    console.log("You are an adult");
}

//if else Statement
let age4=15;
if(age4>=18){
    console.log("Adult");
}else{
    console.log("Minor");
}

//if else if else Statement
let marks3 = 78;
if(marks3>=90){
    console.log("A Grade");
}else if (marks3 >= 80) {
    console.log("B Grade");
}else if(marks3 >= 70){
    console.log("C Grade");
}else{
    console.log("Fail")
}

//Ternary Operator
let n2 = -7
let result8 = n2>0 ? "poaitive" : "Negative";
console.log(result8);

//Switch Statement
let day =4;
switch(day){
    case 1: 
       console.log("Monday");
       break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}