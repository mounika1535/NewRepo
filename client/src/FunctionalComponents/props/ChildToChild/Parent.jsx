import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import { useState } from 'react'
let m=10
function Parent() {
    let[data,setdata]=useState(10)
    function hai(k){
        setdata(k)
    }
    console.log(m)
  return (
    <div>
      <Child1 j={data}/>
      <Child2 n={hai}/>
    </div>
  )
}

export default Parent
