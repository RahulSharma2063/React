import { useState, useTransition } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[pending,startTransition] = useTransition();

  const handleButton=()=>{

    startTransition(async ()=> {
      await new Promise(res=>setTimeout(res,2000))

    })

  }

  return (
    <>
      <h1>useTransition</h1>
      {
        pending? <img style={{width:"250px"}} src="https://media1.tenor.com/m/EYk4Z-tx0fQAAAAC/bus.gif" alt=""/> :null 
      }
      <button disabled={pending} onClick={handleButton}>Click</button>
    </>
  )
}

export default App
