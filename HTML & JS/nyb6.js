let a=['nithin',2,3,4,5]
let [A,B,C]=a
console.log(A,B,C)

let obj={name:'kalavena',country:'Bharat',age:25}
//console.log(obj.name)

// let namer=obj.name
// console.log(namer)

let {namer,country,age}=obj
console.log(age)

let obj2={name:'nithin',dept:'IT',details:{grade:'L3',code:'nyb9602'}}

let {name,dept,details:{grade,code}}=obj2
console.log(grade)
console.log(code)

//Iterators and generators

//Iterator--->for arrays
let num=[1,2,3]
let k=num[Symbol.iterator]()
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())


//generator--->for objects
function* hai(){
    yield 'hello'
    yield 'bye'
    yield 'done'
}
let n=hai()
console.log(n.next())
console.log(n.next())
console.log(n.next())
console.log(n.next())