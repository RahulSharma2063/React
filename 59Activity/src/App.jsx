import { useState, Activity } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [showHome, setShowHome] = useState(true)

  return (
    <>
      <h1>Acitvity</h1>
      <button onClick={() => setShowHome(true)}>Home</button>
      <button onClick={() => setShowHome(false)}>User Form</button>

      <Activity mode={showHome == true? 'visible' : 'hidden'}>
        <Home />
      </Activity>

      <Activity mode={showHome == false? 'visible' : 'hidden'}>
        <UserForm />
      </Activity>
    </>
  )
}
function Home() {
  return (
    <h1>Home Page</h1>
  )
}
function UserForm() {
  return (
    <div>
      <h2>User Form</h2>
      <input type="text" placeholder='enter name' />
    </div>
  )
}

export default App
