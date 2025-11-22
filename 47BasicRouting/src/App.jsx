import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route} from "react-router-dom";
import Home from './Home';
import About from './About';
import Login from './Login';
import Navbar from "./Navbar";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      
    </Routes>
      
    </>
  )
}

export default App
