import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page from './components/Page'
import { ThemeContext } from './context/ThemeContext'
import { UserContext } from './context/UserContext'

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <UserContext.Provider value={'우성전'}>
      <ThemeContext.Provider value={{isDark, setIsDark}}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  )
}

export default App
