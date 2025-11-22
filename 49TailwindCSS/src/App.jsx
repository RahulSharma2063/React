import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-4xl font-bold text-blue-500">Tailwind v4 Working!</h1>
      <h1 className='bg-red-700 text-3xl border-green-600 border-7'>TailwindCSS</h1>
      

    </>
  )
} 

export default App
