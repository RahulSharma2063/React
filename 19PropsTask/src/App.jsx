import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './Clock.jsx'


function App() {

  const[color, setColor]= useState("green")
  
  return (
    <>
    <h1>Task </h1>
    
    <select onChange={(event) => setColor(event.target.value)}>
      <option value={"red"}>Red</option>
      <option value={"blue"}>Blue</option>
      <option value={"green"}>Green</option>
      <option value={"orange"}>Orange</option>
    </select>
      <Clock color={color}/>
    </>
  )
}

export default App


