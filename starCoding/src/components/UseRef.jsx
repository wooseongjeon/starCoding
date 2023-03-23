import React, { useState, useRef } from 'react'

function UseRef() {
    const [count, setCount] = useState(0)
    const countRef = useRef(0)
    let countVar = 0

    console.log(countRef)

    const increaseCountState = () => {
        setCount(count + 1)
    }

    const increaseCountRef = () => {
        countRef.current = countRef.current + 1
        console.log(countRef.current)
    }

    const increaseCountVar = () => {
        countVar = countVar + 1
        console.log(countVar)
    }

  return (
    <div>
        <p>State: {count}</p>
        <p>Ref: {countRef.current}</p>
        <p>Var: {countVar}</p>
        <button onClick={increaseCountState}>State 올려</button>
        <button onClick={increaseCountRef}>Ref 올려</button>
        <button onClick={increaseCountVar}>Var 올려</button>
    </div>
  )
}

export default UseRef