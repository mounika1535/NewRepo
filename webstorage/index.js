

//web storage
//In this the data will be stores in the form of an object
//key value pairs
//setItem to store the data
//getItem to retrive the data
//removeItem to remove the data

//Web storage are two types local and session
//Local storage -->permanent storage
localStorage.setItem("name","mouni")
console.log(localStorage.getItem("name"))
localStorage.removeItem("name")
console.log(localStorage.getItem("name"))

//session storage -->temprary storage
sessionStorage.setItem("name","mouni")
sessionStorage.setItem("role",'associate software engineer')
console.log(sessionStorage.getItem("name",))
sessionStorage.removeItem("name")
sessionStorage.clear()
console.log(sessionStorage.getItem("name"))
console.log(sessionStorage.getItem("role"))