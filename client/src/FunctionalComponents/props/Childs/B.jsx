import React, { useState } from 'react'
import C from './C'

function B({value}) {
    console.log(value)
    let[A,seta]= useState(99)
  return (
    <div>
      <h3>This is in the B component {A}</h3>
      <C/>
    </div>
  )
}

export default B
