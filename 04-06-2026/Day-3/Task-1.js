//1)Practice form validations using JavaScript.
function validateForm(){
    var name=document.getElementById('name').value;
    if(Name === ""){
        alert("Name is Required");
        return false;
    }    
}

//2)Implement input field validations.
function validateForm(){
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var confirmpassword=document.getElementById('confirmpassword').value;
    var gender=document.getElementById('gender').value;
    if(Name === ""){
        alert("Name is Required");
        return false;
    }
    if(email === ""){
        alert("Email is Required");
        return false;
    }
    if(password === "" || password.length < 4) {
        alert("password Required or check the length of password");
        return false;
    }
    if(password !== confirmpassword) {
       alert("password do not match");
       return false;
    }
    if(gender === ""){
        alert("Gender is required");
        return false;
    }
    console.log("form validated successfully")
    return true;
}

//3)Create sample programs using different variable types.
//var
var lname = "chandana";
var age = 23;
console.log("lname:", lname);
console.log("Age:", age);
//let
let Age = 52;
console.log("Before Age:", Age);
Age = 74;
console.log("After Age:", Age);
//const
const Pie = 3.14159;
console.log("Value of Pie:", Pie);
//program
var pname = "Book";
let price = 450;
const GST = 18;
let finalPrice = price + (price * GST / 100);
console.log("Product:", pname);
console.log("Price:", price);
console.log("Final Price:", finalPrice);

//4)Understand variable scope and usage.
//var
function Sname() {
    var name = "mouni";
    console.log(name);
}
Sname();
//var
function fname() {
    var name = "vineetha";
    console.log(name);
}
fname();
//let
if (true) {
    let sal = 30000 ;
    console.log(sal);
}
//const
if (true) {
    const fruits = "mango";
    console.log(fruits);
}



