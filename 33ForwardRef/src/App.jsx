import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'
import UserInput from './UserInput'

function App() {
  const [count, setCount] = useState(0)

  const inputRef = useRef(null)

  const updateInput=()=>{
    inputRef.current.value=1000;
    inputRef.current.focus();
    inputRef.current.style.color='red'
    
    
  }
  return (
    <>
      <h1>ForwardRef</h1>
      <UserInput ref = {inputRef}/>
      <button onClick={updateInput}>update Input Field</button>
    </>
  )
}

export default App
