// 1)Create examples for all function types.
//Function Declaration
function add(a,b){
    return a+b;
}
console.log(add(2,4));
//Function Expression
const add1=function(a,b){
  return a+b;
}
console.log(add1(2,4));
//Named Function
let factorial=function fact(n){
    return n<=1 ? 1 : n * fact(n-1);
}
console.log(factorial(4));
//Arrow Function
let mul=(a,b)=>a*b;
console.log(mul(2,4));
//Anonymous Function
setTimeout(function(){
    console.log("Hello");
},2000);
//Call back Function
function fun(callback){
    callback();
}
fun(()=>{
    console.log("callback executed");
});
//Recursive Function
function factori(n){
    if(n<=1) return 1;
    return n*factori(n-1);
}
console.log(factori(5));
//Higher-Order Function
function multiplyBy(x) {
  return function(y) {
    return x * y;
  };
}
const double = multiplyBy(2);
console.log(double(5));
//Default Parameter Function
function fun(name = "Mounika") {
  return `Hello ${name}`;
}

console.log(fun());
//Rest Parameter Function
function sum(...numb) {
  return numb.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));

// 2)Implement recursive programs such as factorial and Fibonacci series.
//Factorial using Recursion:
function factori(n){
    if(n===0 || n===1){
        return 1;
    }
    return n*factori(n-1);
}
console.log(factori(4));
//fibonacci number using recursion:
function fibonacci(n){
    if (n===0){
        return 0;
    }
    if(n===1){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(6));
//fibonacci series using recursion:
function fibonac(n){
    if(n<=1){
        return n;
    }
    return fibonac(n-1) + fibonac(n-2);
}
function printfibonacciseries(terms){
     for(let i=0;i<terms;i++){
        console.log(fibonac(i));
     }
}
printfibonacciseries(9);

// 3)Demonstrate the differences between var, let, and const.

// 4)Practice hoisting behavior with variables and functions.
//Hoisting with var
console.log(a2);
var a2=15;

//Hoisting with let
//console.log(t);
//let t=50;

//Hoisting with const
//console.log(u);
//const u=100;

//Function Declaration Hoisting
fun();
function fun(){
    console.log("Mounika");
}

//Function Expression with var
//guest();
//var guest = function() {
//   console.log("Hi");
//};

//Arrow Function Hoisting
//add(2, 3);
//const add = (a, b) => a + b;