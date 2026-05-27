var nyb=new Date
console.log(nyb)
var nby2=new Date("2000-11-13")
console.log("my birthday is "+nby2)

let map=new Map();

map.set("name","mounika")
map.set("age",24)
map.set(80,"reddy")
console.log(map)

let m={name:"mounika",age:24,99:"score",70:"bahubali",Map:"thatikonda"}
console.log(m)
/*console.log(typeof(m))
console.log(typeof(map))*/

//MAP vs OBJECT EXAMPLES

//Using Map to store employee information
let employeeMap=new Map();
employeeMap.set('john',{age: 30, department:'IT'});
employeeMap.set('Alice',{age: 35,department: 'HR'});

//Accessing employee information using map
console.log("Employee information using Map: ");
console.log(employeeMap.get('john'));
console.log(employeeMap.get('Alice'));

//Using Object to store employee information
let employeeObject = {John:{age:30, department: "IT"},Alice:{age:35,department:"HR"}};

//Accessing employee information using object
console.log("\nEmployee information using Object ")
console.log(employeeObject['John'])
console.log(employeeObject['Alice'])

//console.log(employeeObject)

var a=10;
var b=20;
var c=8;
var d=20;
var e="20"
console.log(a>b)
console.log("loose equality ",d==e)
console.log("loose in equality",d!=e)

let aage=18
console.log(aage>18)
aage=22
console.log(aage)

const ab=1
console.log(ab)
/*ab=1;
console.log(ab)*/

if(aage!=22||ab!=1){
    console.log("yes")
}else{
    console.log("no")
}
console.log(2<4&&8>4)
console.log(1&2)
console.log(1|2)

function Hello(){
    console.log("hi how are doing")
}
Hello()

function checkEligibility(age){
    if(age>18){
        console.log("Eligible for Pan Card")
    }
}
let age=19
checkEligibility(age)

/*
function grades(g){
    switch(g){
        case 10:
            console.log("Excellent")
            break;
        case 9:
            console.log("Good")
        break;
        case 8:
            console.log("Bad")
        break;
        default:{
        console.log("congratulations you are failed")
        }
    }    
}
var gradeA=7
grades(gradeA)
*/

let grades=[8,10,7]
for(let i=0; i<grades.length; i++){
    function grade(g){
    switch(g){
        case 10: 
        console.log(" Excellent")
        break;
        case 9:
            console.log(" Good")
            break;
        case 8:
            console.log(" Average")        
            break;
        case 7:
            console.log(" below A")
            break;
            default:
                console.log("failed")
    }
}
}
//grade(grades[i])

//infinite loop

//for of arrays value
//for in objects key based on that key we will get the values(key=index's)

let arr=[1,2,3]
console.log(arr)

for(a of arr){
    console.log(a)
}

let obj={a:"hello",b:"hi"}
console.log(obj)
console.log("---->",obj["a"])

for (a in arr){
//    console.log(obj[a])    //for of won't work on arrays becoz they are not iterable, for in works on objects as well as arrays
console.log(arr[a])
}

function hello(a=10,b=10) //Parameters
    {
    console.log("---->",a+b)
}
hello(1,undefined) //arguments

//Arguments will have high priority than parameters 

//Varying in number of parameters and arguments
function varying(a=10,b,m,n,...f){
    console.log(a,b,m,n)
    console.log(arguments)
    console.log(f)
}
//rest parameter and argument objects
varying(undefined,2,8,67,6,44,66,33)

//(...f)-->is the rest parameter means that stores the remaining arguments which are left after assiging..

/*Function Expression 
3 ways
1) named
2) anonymous
3) arrow(=>) */

//Named Functon

let ak = function functionName(){

}
ak()

//Anonymous Function

let bk= function(){

}

//Arrow Function

let ck=()=>{}

var reddy =10;
console.log(reddy)

var reddy = 90
console.log(reddy)

let reddy2=98
console.log(reddy2)

/*let reddy2=99
console.log(reddy2)*/

const reddy3 =100
console.log(reddy3)

/*const reddy3=191
console.log(reddy3)*/

/*const red;
red=90
console.log(red)*/

//HOISTING

//programme execution in 2phases

//memory creation
//code execution
//console.log(p)
let p=99  //---->whenever we declare with let and const they are stored in script (and) 
// they are in temporal dead zone and we can't access them
console.log(p)

//Hoisting: Accessing of memory value even before its execution

let sum=0
let one=function rec(a){
    if(a==0){
        return 0}
    sum+=a
    return sum+rec(a-1)
}
console.log(one(10)) //recusrive function

function add(a){
    return function (b){
            console.log((b/100)*100)
            //return "done"
    }
}
var M=add(100)(96)
// console.log(add(100)(87.9))
// console.log(M)

//console.log(this)

// function hello(){
//     console.log(this)
// }
// hello()

// let ar=()=>{
//     console.log(this)
// }
// ar()

let objt={
    name:"mounika",age:25,
    hello1:()=>{
        console.log(this)
    },
    hello(){
        console.log(this)
        //console.log(this.age)
    },
    
}
objt.hello()
objt.hello1() //arrow functions don't work the "this" keyword so they 
// take from lexico means take from their parent object like 
// window object(window object is the top most parent object in java script).

//change of this reference
//by means of call, apply and bind

function hello(a,b){
     console.log(this)
     console.log(a,b)
 }

 //call
 hello.call(objt,10,29)
 //1st argument will be object reference
 //next will be the arguments for that function

 //apply
hello.apply(objt,[20,80])

//bind
hello.bind(objt,30,70)()
