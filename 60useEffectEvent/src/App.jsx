import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { useEffectEvent } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const countControl= useEffectEvent(()=>{
    setCount(count+1)
  })

  useEffect(()=>{
    const interval =setInterval(()=>{
      countControl()
    },1000)
    console.log(interval);

    return ()=> clearInterval(interval)
    
  },[])

  return (
    <>
      <div>
        <h1>useEffectEvent</h1>
        <h1>{count}</h1>
      </div>
    </>
  )
}

export default App
