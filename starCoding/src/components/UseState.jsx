import React, { useState } from 'react'

function UseState() {
    const [time, setTime] = useState(1)

    const handlerClick = () => {
        
        if (time >= 12) {
            setTime(1)
        } else {
            setTime(time + 1)
        }
        
    }

    console.log('업데이트');

  return (
    <div>
        <span>현재 시각: {time}시</span><br />
        <button onClick={handlerClick}>Update</button>
    </div>
  )
}

export default UseState