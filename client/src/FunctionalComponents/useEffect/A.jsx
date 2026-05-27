import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function A() {
    let[a,seta]=useState([])

    useEffect(()=>{
        console.log(a)
    },[a])
    useEffect(()=>{
        console.log("Hello")
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((d)=>d.json())
        .then((d)=>
            //console.log(d)
        seta(d)
            //console.log(Array.isArray(d))
        )
    },[])
    //console.log(a[0])
    //console.log(a[0].title)
    return (
    <div>A
        {/* {a} */}
        {/*<h1> {a[1]?.title} </h1>
        <h3> {a[1]?.id} </h3>
        <h4> {a[1]?.userId} </h4>
        <h1> {a[2]?.title} </h1>
        <h3> {a[2]?.id} </h3>
        <h4> {a[2]?.userId} </h4>
        <h1> {a[3]?.title} </h1>
        <h3> {a[3]?.id} </h3>
        <h4> {a[3]?.userId} </h4> */}
        {/* map */}
        {a.map((b)=>{
            return(
            <div key={b.id}>
                {/*<h1>conso</h1>*/}
                
                <h1>{b.title}</h1>
                <h3>{b.id}</h3>
            </div>)

        })}
        <button onClick={()=>seta(a+1)}>change</button>
    </div>
  )
}

export default A
