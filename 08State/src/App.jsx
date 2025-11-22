import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter.jsx'

function App() {
  const [fruit, setFruit] = useState("Apple")
  const handleFruit = () => {
    setFruit("Banana")
  }
  return (
    <>
    <h1>Hello</h1>
    <h1>{fruit}</h1>
    <button onClick={handleFruit}>Change fruit name</button>
    <Counter/>
    </>
  )
}

export default App
