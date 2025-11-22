import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'

function App() {

  const displayName = (name) => {
        alert(name)
    }

    const getUser = ()=> {
      alert("get User Function Called")
    }

  return (
    <>
    <h1>Call parent Component Function from child component</h1>
      <User displayName={displayName} name="Rahul" getUser={getUser}/>
      <User displayName={displayName} name="Sameer" getUser={getUser}/>
      <User displayName={displayName} name="Saurabh" getUser={getUser}/>
      <User displayName={displayName} name="Vipul" getUser={getUser}/>
      
    </>
  )
}

export default App
