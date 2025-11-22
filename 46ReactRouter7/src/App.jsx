import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home'
import About from './About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Link to="/">Home Page</Link>
    <Link to="/about">About Page</Link>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path= "/about" element={<About />}/>
      </Routes>
    </>
  )
}

export default App


