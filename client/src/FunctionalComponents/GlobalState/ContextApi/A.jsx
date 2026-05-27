import React, { useState } from 'react'
import B from './B'
import C from './C'
import { createContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export let context=createContext()
function A() {
  let data=useSelector((state)=>{
   return state
  })

  let d=useDispatch()
  console.log(d)
  console.log(data)
  let[a,seta]=useState(100)

  return (
    <div>
      <h1>data:{data.sum}</h1>
      <button onClick={()=>{d({type:"a",payload:"10"})}}>
        Inc
      </button>
        A
        <button onClick={()=>{d({type:'B'})}}>Dec</button>
        <context.Provider value={{a,seta}}>
          <B/>
      <C/>
        </context.Provider>
      
    </div>
  )
}

export default A


//1)context creation createContext
//2)context provider provider
