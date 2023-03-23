import React, {useState, useEffect} from 'react'

function UseEffect() {
    const [count, setCount] = useState(1)
    const [name, setName] = useState('')
    const [array, setArray] = useState([])

    const handleCountUpdate = () => {
        setCount(count + 1)
    }

    const handleInputChange = (e) => {
        setName(e.target.value)
    }

    useEffect(() => {
        console.log('랜더링')
    }, [count])

    const updateInput = () => {
        setArray([...array, name])
    }

  return (
    <div>
        <button onClick={handleCountUpdate}>Update</button> <br />
        <span>count: {count}</span><br />
        <input type="text" value={name} onChange={handleInputChange} /><br />
        <span>name: {name}</span><br />
        <button onClick={updateInput}>Update</button>
        <p>{array}</p>
    </div>
  )
}

export default UseEffect