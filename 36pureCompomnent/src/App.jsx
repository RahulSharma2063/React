import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// let guest = 0

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cup guest ={1}/>
      <Cup guest={3}/>
    </>
  )
}

const Cup = ({guest})=>{
  // guest = guest+1
  return <h1>We have {guest} guest and we have to make {guest} cup of tea.</h1>
}

export default App
