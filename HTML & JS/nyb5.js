//synchronous
//Asynchronous

console.log("one")

//setTimeOut
// setTimeout(()=>{console.log("two")
// },100)
// setTimeout(()=>{console.log("two 1")
// },0)

console.log("three")
let sum=0
for(i=0;i<10;i++){
    sum+=i
}
console.log(sum)

//setInterval
let a = setInterval(() => {
    console.log("four ")
}, 1000);

//clearInterval
setTimeout(()=>{
    clearInterval(a)
},0)

//to print hello world 2 times
// let c=setInterval(()=>{
//     console.log("hello world")
// },1000)

// setTimeout(()=>{
//     clearInterval(c)
// },2000)

//clearTimeOut

//Synchronous

//Event Boubling---->event is traversing from child to parent element
//capturing---->event is traversing from parent to child event
//deligation---->event will be added to the parent element and the event will be used by all the child

let child=document.getElementById("innertext")
function action(){
    console.log("inner h1 clicked")
}
child.addEventListener("click",action)


let div=document.getElementById("div")
function action2(){
    console.log("Parent Element")
}
div.addEventListener("click",action2)

let div1=document.getElementById("div1")
function action3(){
    console.log("top parent clicked")
}
div1.addEventListener("click",action3,true)

let parent=document.getElementById("outertext")
function action1(){
    console.log("outer text")
}
parent.addEventListener("click",action1,true)

let list=document.getElementById("list")
function listclick(){
    console.log("clicked")
}
list.addEventListener("click",function(e){
console.log(e.target.innerText)
})

//window.onscroll
//console.log(window)

//To improve api calls using
//1)Normal event

//2)Throttling

//3)Debouncing

//Normal event
let button=document.getElementById("button")
let aa=0
let b=0
let c=0
button.addEventListener("click",function(){
    aa+=1
    console.log(`value of a is ${aa}`)
    console.log("button clicked")
})

//Throttling
let lastClick=0
button.addEventListener("click",function(){
    let current = Date.now()
    if(current-lastClick>2000){
        b+=1
        console.log(`value of b is:${b}`)
        lastClick=current
    }
    console.log("button clicked")
})

//debouncing
let t
button.addEventListener("click",function(){
    clearTimeout(t)
    t=setTimeout(() => {
        c+=1
        console.log(`value of c is ${c}`)    
    }, 2000);
        
})

//callBackFunction--->the parent function uses child function as its parameter/argument
//in this, the parent function executes first and then child function

function function1(s){
    console.log(s)
}
function one(a,b,c){
    console.log("one is executed")
    c(a+b)

}
one(1,2,function1)

//Promise
let p=new Promise((resolved,rejected)=>{
    let status=true
if(status)
    resolved("function successfull")
    //console.log("resolved")
else
    //console.log("rejected")
rejected("function unsuccessfull")
})
// p
// .then//success case resolve
// .catch//failure or reject

p
.then((a)=>{
    console.log(a)
})
.catch((b)=>{
    console.log(b)
})

//pending resolve/reject
//all--->just like 'and' operator if all the promise are resolved then the 'then' function executes means completed or resolved.

let e=Promise.resolve("completed")
let f=Promise.reject("completed")

Promise.all([e,f])
.then((a)=>{
    console.log(a)
})
.catch(()=>{
    console.log("failed")
})

//promise.race()
let pa=new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve("pa is done")
},300);
})

let pb=new Promise((resolve)=>{
    setTimeout(() => {
        resolve("pb is done")
    }, 500);
})

Promise.race([pa,pb])
.then((mounika)=>{
    console.log(mounika)
})
.catch((pa)=>{
    console.log(pa)
})

//Promise.allSettled
Promise.allSettled([pa,pb])
.then((a)=>{
    console.log(a)
})

//Promise.any
Promise.any([pa,pb])
.then((a)=>{
    console.log(a)    
})

//Async and await

function hai(){
    return new Promise((resolve)=>{
            setTimeout(() => {
                resolve("done")
            },500);
    })
}

async function hello2() {
    return await hai()
}
let s=hello2()
console.log(s)