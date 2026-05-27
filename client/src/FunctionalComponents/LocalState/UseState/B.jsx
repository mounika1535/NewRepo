import React, { useState } from 'react'
import A from '../UseReducer/Props/A'

function B() {
   let[A,hello]=useState(
       {
          name:"Mounika",
          city:"Vijayawada"
       }
    )
    console.log(A)
    let set =()=>{
        hello({
            ...A,
            city:"Hyderabad"
        })
    }
  return (
    <div>
        <h3>{A.name}</h3>
        <h3>{A.city}</h3>
        <button onClick={set}>click</button>
    </div>
  )
}

export default B
