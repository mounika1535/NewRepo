import React, { useEffect, useState } from 'react'

function Login({value}) {
  let[a,seta]=useState("")
  useEffect(()=>{
      console.log("Login")
  },[])
  useEffect(()=>{
     console.log(a)
  },[a])
  let handlesubmit=(e)=>{
      e.preventDefault()
      seta("")
      value()
      console.log("Login button clicked")
      console.log(e)
      //e.preventDefault()
      //value()
      // api call post (user id password)
      // success
      // failure
      // true -> profile page
      // false -> login page
  }
  let handlechange =(event)=>{
       console.log("handle change called")
       //console.log(event.target.value)
       seta(event.target.value)
  }

  return (
    <div>
        <h1>Login</h1>
        {a}
        <form onSubmit={handlesubmit} >
            <input type='text' value={a} onChange={handlechange}/>
            <button type='submit'>login</button>
        </form>
        <button onClick={handlesubmit}>click this</button>
    </div>
  )
}

export default Login
