//API methods
//get ----> fetching the data
//post ---->to send the data
//put ---->It changes the entire record
//patch --->updates only partial data
//delete --->to delete the data

//Fe--->API(get)-->BE(Routes,middlewar controllers)
let data=[]
fetch("https://jsonplaceholder.typicode.com/albums")
.then((data)=>{
    return data.json()
    //console.log(data)
})
.then((d)=>{
    data=d;
    console.log(d)})
.catch((e)=>{
    console.log(e)
})
console.log(data)

//fetch("url",{
    //method:"POST"
    //body:JSON.stringify({...data..}),
    //headers{
        //"content-type":
    //}
//})

