import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Fragment } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
    
      <Data/>
      <Data/>
    </Fragment>
  )
}

function Data(){
  return(
    <Fragment>
      <h1>Fragments</h1>
      <h1>Fragments</h1>
    </Fragment>
  )
}

export default App
