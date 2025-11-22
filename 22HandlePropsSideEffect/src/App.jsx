import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(0)

  return (
    <>
  
    <Counter count={count} data={data}/>
    <button onClick={() =>setCount(count + 1)}>Counter </button>
    <button onClick={() =>setData(data + 1)}>Data </button>
    </>
  )
}

export default App
