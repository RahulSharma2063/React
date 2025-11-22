import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>First Component {sum()}</h1>
    <Fruit/>
    <Colors/>
    </>
  )
}

function Fruit(){
  return(
    <div>
      <h1>Apple</h1>
    </div>
  )
}

function Colors(){
  return(
    <h1>Red</h1>
  )
}

function sum(){
  return 10+10
}

export default App
