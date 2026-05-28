import React from 'react'
import Child1 from './Child1'

function Child2(j) {
    console.log(j)
    let k=1000
    j.n(k)
  return (
    <div>
      
    </div>
  )
}

export default Child2


// Child2 -> parent -> Child1