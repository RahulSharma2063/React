import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './user.jsx'

function App() {
  const [display, setDisplay] = useState(true)

  return (
    <>
      <h1>Hello</h1>

      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {
        display ? <User/>: null
      }

    </>
  )
}

export default App
