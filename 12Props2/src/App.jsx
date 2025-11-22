import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User.jsx'
import Wrapper from './Wrapper.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* <User name="Rahul Sharma"/>
    <User /> */}
      <Wrapper color="orange">
        <h1>HELLO Everyone</h1>
      </Wrapper>

      <Wrapper>
        <h1>HELLO Rahul</h1>
        <h2 style={{color:"red"}}>Please Login</h2>
      </Wrapper>


    </>
  )
}

export default App
