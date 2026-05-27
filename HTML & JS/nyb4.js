// DOM
// Document Object Model

// it will attach the document in the form of a tree structure

// HTML
//Selecting dom element
//getElementById--->single element with that id
//getElementsbyClassName--->in the form of array[]
//getElementsByTagName--->
//getElementsByName
//querySelector
let h1=document.getElementById("heading")
console.log(h1)
let h2=document.getElementById("text")
console.log(h2)
let f=document.getElementsByClassName("h1")
console.log(f)
let g=document.getElementsByTagName('h1')
console.log(g)
let h=document.querySelector('h1')
console.log(h)

//Dom traversing

//parentElement
//children
//firstElementChild
//lastElementChild

let namee=document.getElementById('name')
console.log(namee)
let parentElement=namee.parentElement
console.log(parentElement)
console.log(parentElement.children)
console.log(parentElement.firstElementChild)
console.log(parentElement.lastElementChild)

//creating a dom element
let newElement=document.createElement('h1')
newElement.innerText='9100143904'
console.log(newElement)
parentElement.appendChild(newElement) //append

//prepend
parentElement.prepend(newElement) 

//before

//after

let hello=document.getElementById('btn')
console.log(hello)

// btn.onclick=function(){
//     alert("button clicked")
//     console.log("button clicked")
// }

//addEventListener

// btn.addEventListener("click",function(){
//     alert("button clicked")
// }) rewritten as below
function hi(){
    //alert("button clicked")
    hello.innerText="button clicked"
}

hello.addEventListener("click",hi)
