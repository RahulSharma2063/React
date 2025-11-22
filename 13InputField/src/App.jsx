import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [val, setVal] = useState("")

  return (
    <>
    <h1>Enter</h1>
    <input type="text" value={val} onChange={() => setVal(event.target.value)} placeholder='Enter User Name' />
    <h1>{val}</h1>
    <button onClick={() => setVal("")}>Clear Value</button>
    </>
  )
}

export default App
