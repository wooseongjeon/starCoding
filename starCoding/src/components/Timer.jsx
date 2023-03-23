import React, { useEffect } from 'react'

function Timer() {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('타이머 돌아가는중...')

        }, 1000)

        return () => {
            clearInterval(timer)
            console.log('timer done')
        }
    }, [])


  return (
    <div>
        <span>차이머를 시작합니다. 콘솔을 보세요!!!</span>
    </div>
  )
}

export default Timer