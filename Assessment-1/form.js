function validateForm(){
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var phonenumber=document.getElementById('phonenumber').value;
    var password=document.getElementById('password').value;
    if(Name === ""){
        alert("Name is Required");
        return false;
    }
    if(email === ""){
        alert("Email is required");
        return false;
    }
    if(phonenumber ===""){
        alert("Phonenumber is required");
        return false;
    }
    if(password ===""){
        alert("Password is required");
        return false;
    }
    if(name === "" || email === "" || phonenumber === "" || password === ""){
        alert("All Fields are Filled Correctly");
        return false;
    }
    else{
       alert("Field is Empty");
       return false;
    }
    console.log("None of the Fields are Empty");
    return true;
}

//find duplicate elements
let arr=[1,2,3,4,1,7,3,4,2];
let result8=[];
for(let i=0;i<arr.length;i++)
    {
     for(let j=0;j<result8.length;j++)
        {
        for(let k=i+1;k<arr.length;k++){
        if(arr[i]===result[j]){
        result8[result8.length]=arr[i];
        break;
    }
    }
}
}
