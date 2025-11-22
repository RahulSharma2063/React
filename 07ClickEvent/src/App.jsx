import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function call() {
    alert("Hello There!!")
  }
  const fruit = () => {
    alert("Apple")
  }
  const fruiit = (name) => {
    alert(name)
  }

  return (
    <>
    <h1>Hello</h1>
    <button onClick={fruit}>Apple</button>
    <button onClick={() => fruiit("Banana")}>Banana</button>
    </>
  )
}

export default App
