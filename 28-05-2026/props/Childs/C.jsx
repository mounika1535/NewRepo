import React, { useState } from 'react'


function C({value}) {
    console.log(value)
    let[A,seta]=useState(10)
  return (
    <div>
      <h3>This is C component {value}</h3>
      
    </div>
  )
}

export default C
