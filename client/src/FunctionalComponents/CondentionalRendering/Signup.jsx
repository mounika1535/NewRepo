import React, { useEffect } from 'react'
import A from '../customHooks/A'

function Signup() {
  function hello(){
    console.log("Function called")
    fetch("")
    .then(()=>{})
    .then(()=>{})
  }
   A()
  useEffect(()=>{
      console.log("Signup")
      //hello()
  },[])
  return (
    <div>
        <h1>Signup</h1>
    </div>
  )
}

export default Signup
