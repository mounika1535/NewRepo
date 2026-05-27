//Array
//collection of continous memory block of same type
var arr=["1",2,3]
console.log(arr)

//adding element to array
//push: is used to add the element at the end of the array
//unshift is used to add the element at the begining of the array
//splice is used to add anywhere in the array
//pop is used to remove the element
//shift to remove first element

//push
function hai(){
    arr.push(5)
}
hai()
console.log(arr)

//unshift
arr.unshift(8)
console.log(arr)

//splice(indexvalue,deletecout,new)
arr.splice(2,0,"hello") //0 means without deleting the existing values
console.log(arr)
arr.splice(2,1,"hi")//with deleting the existing element
console.log(arr)

//how to accesss a single item in array
//ans: by using index values
var a=[1,2,3,4,5]
console.log(a[3])

//pop
arr.pop()
console.log(arr)

//shift
arr.shift()
console.log(arr)

//splice
arr.splice(0,1)
console.log(arr)

let num=[0,11,2,3,4]
console.log(num)
console.log(num[2])
console.log(num.indexOf(11))
console.log(num.includes(22))
//indexof is used to find the index of a  particular element in a array
//if the value is not present in the array it will return -1

//includes -->true or false

let num1=[0,11,2,3,4]
num1.splice(0,num1.length)
//making array length to 0
//num1.length=0
console.log(num1.length)
//num1.splice(0,5)
console.log(num1)

//Assign empty array

//combine 2 arrays

//concat

var a=[1,2,3,4]
console.log(a.map(i=>i*i))//------->Map
var b=["a","b","c","d"]
console.log(a,b)
var c=a.concat(b)
console.log(c)

var d=[...a,...b]
console.log(d)

for(k of d){
    console.log(k)
}
for(l in d){
    console.log(d[l]+1)
}

//Testing the Array
//some and every

console.log(a.some(i=>i>3))
console.log(a.every(i=>i>2))

//Join
console.log(a.join("-"))


/*let arraye=[1,5,3,5,9,7,5,66,4,3]

for(let i=0; i<arraye.length; i++){
    for(let j=i; j<arraye.length; j++){
        if(arraye[i]>arraye[j]){
            let temp=arraye[i];
            arraye[i]=arraye[j];
            arraye[j]=temp;
        }
    }
}
console.log(arraye)*/

//Sort
let arr1=[1,9,2,4,0,2,1,10,20]
//0 1 1 2 2 4 9 10 20
arr1.sort()
console.log(arr1)

arr1.sort((a,b)=>a-b)
console.log(arr1)

//Flattening of Array
let ab=[1,2,3,4,[1,2,3,[2,1,3]]]
console.log(ab.flat(3))

//Removing Dulipicates
var m=[1,2,3,4,5,2]
console.log(new Set(m))

var n=[]

for(i of m){
    if(n.indexOf(i)==-1)
    n.push(i)
}
console.log(n)

//Map, Filter & Reduce

//filter (for map refer line.no.72)
console.log(m.filter(i=>i>2))

//reduce
let arrr=[1,2,3,4,5]
console.log(arrr.reduce((i,j)=>i+j,0))

//Major difference between Map and reduce is Map filter returns the array whereas reduce returns the overall single value of an array


//for each
m.forEach((i,j)=>{
    console.log(i,'index is',j)   //by using forEach loop we can retrieve both index and values
})

