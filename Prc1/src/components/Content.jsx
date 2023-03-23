import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { UserContext } from '../context/UserContext'

function Content() {
    const { isDark } = useContext(ThemeContext)
    const user = useContext(UserContext)
  return (
    <main
        className='content'
        style={{
            backgroundColor: isDark ? 'black' : 'white',
            color: isDark ? 'white' : 'black'
        }}
    >
        <h2>{user}님, 좋은 하루 되세요</h2>
    </main>
  )
}

export default Content