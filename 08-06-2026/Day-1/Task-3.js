// 1)Create functions with and without parameters.
// Without parameters
function fun() {
    console.log("Hello, Welcome!");
}
fun();
//With parameters
function fun1(name) {
    console.log("Hello, " + name + "!");
}
fun1("Mounika");
//Multiple Parameters
function add(a, b) {
    return a + b;
}
let resu4 = add(10, 20);
console.log(resu4);

// 2)Practice passing arguments and using default parameters.
//passing arguments
function fun(name) {
    console.log("Hello, " + name);
}
fun("Mounika");
fun("Vineetha");
//multiple arguments
function mul(a, b) {
    return a * b;
}
console.log(mul(5, 3));
console.log(mul(10, 20));
//default parameters
function fun(name = "Mouni") {
    console.log("Hello, " + name);
}
fun("Mounika");
fun();
//multiple default parameters
function calculatePrice(price, tax = 7.8) {
    return price + price * tax;
}
console.log(calculatePrice(100));
console.log(calculatePrice(100, 0.10));

// 3)Implement examples using Arguments Object and Rest Parameters.
//using the arguments object
function values() {
    console.log(arguments);
}
values("JavaScript", 101, true);
//using rest parameters
function courses(...values) {
    console.log(values);
}
courses("HTML", "CSS", "JavaScript");
//Rest Parameters with Regular Parameters
function studentInfo(name, ...marks) {
    console.log("Name:", name);
    console.log("Marks:", marks);
}
studentInfo("Mounika", 85, 90, 88);

//4)Compare their behavior and use cases.