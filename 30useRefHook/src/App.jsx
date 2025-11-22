import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function App() {
  const inputRef = useRef(null);
  const h1Ref = useRef(null);

  const inputHandler =()=>{
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.color='red'
    inputRef.current.placeholder='Enter Password'
    
    
  }
  
  const toggleHandler=()=>{

    if(inputRef.current.style.display!='none'){
    (inputRef.current.style.display='none')
    } else{
      inputRef.current.style.display='inline'
    }
  }

  const h1Handler=()=>{
    if(h1Ref.current.style.color!='green'){
      h1Ref.current.style.color='green'
    } else{
      h1Ref.current.style.color='black'

    }
  }
  
  return (
    <>
      <h1>useRef</h1>
      <button onClick={toggleHandler}>Toggle</button>
      <input  ref={inputRef} type="text" placeholder='Enter user name' />
      <button onClick={inputHandler}>Input</button>

      <h1 ref={h1Ref}>Hello</h1>
      <button onClick={h1Handler}>Handler</button>
    </>
  )
}

export default App
