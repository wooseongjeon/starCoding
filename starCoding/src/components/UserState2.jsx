import React, { useState } from 'react'

const heavyWork = () => {
    console.log('엄청 무거운 작업')
    return ['홍길동', '감스트']
}

function UserState2() {
    const [names, setNames] = useState(() => {
        return heavyWork()
    })
    const [input, setInput] = useState('')

    const handlerInputChange = (e) => {
        setInput(e.target.value)
    }

    const handlerUpload = () => {
        setNames((prevState) => {
            console.log(prevState)
            return([input, ...prevState])
        })
    }

    const keyDown = (e) => {
        if (e.key === 'Enter') {
            handlerUpload()
        }
    }

  return (
    <div>
        <input type="text" value={input} onChange={handlerInputChange} onKeyDown={keyDown}/>
        <button onClick={handlerUpload}>Upload</button>
        {names.map((name, idx) => {
            return <p key={idx}>{name}</p>
        })}
    </div>
  )
}

export default UserState2