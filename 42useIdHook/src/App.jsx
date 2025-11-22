import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useId } from 'react'

function App() {
  
  return (
    <>
    <UserForm/>
    <hr />
    <UserForm/>
  

    </>
  )
}

function UserForm() {
  
  const user = useId();
  

  return (
    <>
    <form action="">
      <label htmlFor={user+"name"}> Enter user name</label>
      <input id={user+"name"} type="text" placeholder='enter name' />
      <br /><br />
      <label htmlFor={user+"password"}> Enter user password</label>
      <input id={user+"password"} type="text" placeholder='enter password' />

    </form>
    </>
  )
}

export default App
