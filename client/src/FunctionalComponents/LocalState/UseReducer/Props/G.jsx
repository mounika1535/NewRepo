import React, { useState } from 'react'

function G() {
    let[value,setValue]=useState(10)
  return (
    <div>
      G
      <h3>Value in G{value}</h3>
    </div>
  )
}

export default G
