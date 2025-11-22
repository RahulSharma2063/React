import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {

  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);


  useEffect(() => {
    callOnce()
    counterFunction()
  },[counter])
  

  function counterFunction(){
    console.log(counter);
    
  }

  function callOnce(){
    console.log("Function called");
    
  }
  return (
    <>
    <h1>useEffect</h1>
      <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
      <button onClick={() => setData(data + 1)}>Data {data}</button>
    </>
  )
}

export default App
