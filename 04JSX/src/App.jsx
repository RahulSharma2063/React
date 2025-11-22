import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name = "Rahul"
let x = 20;
let y = 30;
  return (
    <>
    <h1>My name is {name}</h1>
    <h1>{10*5}</h1>
    <h1>{x+y}</h1>
    <button onClick={() => alert("Hello")}>Hello</button>
    </>
  )
}

export default App
