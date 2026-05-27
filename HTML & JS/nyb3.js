//objects -->
// in objects data will be stored as key and value pair
//keys will be of strings
//value can be of any data type
//key and value willl be seperated by :
//each key value pair will be seperated by ,
//{}

//why objects---->
//to store related date we use objects

/*let emp={
    empName:"",
    empId:"",
    bGroup:"",
    role:"",
    address:"",
    salary:"",
    phoneNumber:"",
    dob:"",
}*/

//There are 4 ways to define object 
//1) literal way (above one)
/*exp:*/ let b={}
console.log(b)

//2) new keyword
let a = new Object()
console.log(a)

//3)constructor
function employee(name,role,dept){
    this.name=name
    this.role=role
    this.dept=dept
}
let emp1=new employee("Nithin","Ase","IT")
console.log(emp1)

//4)class
class Emp{
    constructor(name,role,dept){
        this.name=name
        this.role=role
        this.dept=dept
    }
}
var m=new Emp("Nithin","ASE","IT")
console.log(m)


var obj={one:"a",b:"hello",c:20}
console.log(obj.one)
console.log(obj["c"])
obj.hello="good morning"
console.log(obj)
delete obj.one
console.log(obj)
obj.b='hai'
console.log(obj)

//Copying of Objects
// Normal copy
// deep copy
// shallow copy


//Normal copy
var obj={a:"one",b:"two",c:"three"}
var obj1=obj

console.log(obj1)
obj1.d="four"
console.log(obj1)
console.log(obj)
//if we do any changes in copied object, then the changes will also 
//reflect in orginal object becoz they share same object address(memory location)..

//shallow copy
var obj2={...obj}  //by using spread operator
obj2.name="hello"
obj2.k="bye"
console.log("obj2",obj2)
console.log("obj",obj)
////if we do any changes in copied object, then the changes will not
//reflect in orginal object.

var orginal = {one:"a",b:"hello",c:20,obj:{a:"hello",b:"hai"}}
var copy={...orginal}

copy.name="hello"
copy.obj.a="good morning"
orginal.k="bye"
console.log("copy",copy)
console.log("orginal",orginal)
//for primitive data types values will not change whereas reference data types will changes

//Deep copy
var copy1=JSON.parse(JSON.stringify(orginal)) //JSON.parse and JSON.stringify 
console.log("copy",copy1)
copy1.one="bye"
copy1.obj.a="hey"
console.log("copy",copy1)
console.log("orginal",orginal)
//in this for both primitive and reference data types values will not change

//Copying of Arrays
var arr=[923,232,44,12,[10,391,3231]]
//normal copy
var copy=arr
console.log("arr",arr)
console.log("copy",copy)

//shallow copy
var copy1=[...arr]
copy1[0]=9999
copy1[4][0]=1000
console.log("Original",arr)
console.log("copy",copy1)

//deep copy
var copy2=JSON.parse(JSON.stringify(arr))
copy2[4][0]="hello"
console.log("Orginal",arr)
console.log("copy2",copy2)

//for in

//Objects.keys
// Objects.values
// Objects.entities

//date
let d=new Date()
console.log(d)

var k=10
var i=20
console.log("the value of k is",k,"the value of i is",i,"their sum is ",k+i)
console.log(`the value of k is ${k} the value of i is ${i} and their sum is ${k+i}`)

var ab=10
var bc=10.8
console.log(Math.ceil(bc))
console.log(Math.sqrt(9))
console.log(Math.pow(2,3))
console.log(Math.round(bc))
console.log(Math.floor(Math.random()*(1000-500+1))+500)//between 500 to 1000
console.log(Math.floor(Math.random()*9)+1)

let s="hello"
console.log(s.length)