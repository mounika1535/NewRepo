//2 ways
//1.default
//only 1 export can be done
//we can import with any name
//no need of {} at the time of input
       
//named export -->n number
//import good from './index1.js'
import good from './index1' 
import {a} from "../loops/indexm"
console.log(a)
console.log(good)
export default function sum(a,b){
return a+b
}

export let arr=[1,2,3,4]
export let a=10

export function hello(){

}

export function diff(){

}

function bye(){

}

console.log(sum(1,2))