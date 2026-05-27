console.log("Good morning")
console.log("hello")

//try and catch

try {
     console.log("hai")
     //throw("error")
}
catch (e){
    console.log(e)
    console.log("Error occureed")
}

finally{
    console.log("finally block")
}

console.log("Bye")


//out put methods
console.log("hello")

//alert("Hello user!")
document.write("Welcome back user")

//prompt--->To get the input from the user
//let data=prompt("Enter your name:")
//console.log(data)
let d=document.getElementById("hi")
let d1=document.getElementById("h2")
console.log(d)
console.log(d1)

//BOM (Browser Object Model)
console.log(screen.width)
console.log(screen.height)
console.log(navigator.userAgent)

//ParseInt---->convert into integers
let data=prompt("Enter a value:")
let m=parseInt(data)
console.log(typeof(m))
let k=m.toString()
console.log(typeof(k))

//ParseFloat---->convert into decimal values
let f=10.16756298
console.log(f)
console.log(f.toFixed(2))
