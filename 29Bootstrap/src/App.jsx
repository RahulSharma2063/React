import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'react-bootstrap'
import { Alert } from 'react-bootstrap'

function App() {

  return (
    <>
    <h1>BootStrap</h1>
      <Button onClick={()=> alert("Bootstrap")}> Ok</Button>
      <Alert variant='danger'>Hello</Alert>
    </>
  )
}

export default App
