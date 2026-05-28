import React, { useState } from 'react'
//import B from './B'
import C from './C'
import B from '../../LocalState/UseState/B'
function A() {
  let[a,seta]=useState(10)
  return (
    <div>
        
       <B/>
      {/*<B value={a}/>*/}
      {/*<C value={a}/>*/}
    </div>
  )
}

export default A
