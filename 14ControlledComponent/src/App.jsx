import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  return (
    <>
    <h1>Controlled Component</h1>
    <form action="" method='get'>
      
      <input type="text" onChange={(event)=> setName(event.target.value)} placeholder='Enter Name' />
      <br /><br />
      <input type="password" onChange={(event) => setPassword(event.target.value)} placeholder='Enter password' />
      <br /><br />
      <input type="text" onChange={(event) => setEmail(event.target.value)} placeholder='Enter email' />
      <br /><br />
      <button>Submit</button>
      <h3>{name}</h3>
      <h3>{password}</h3>
      <h3>{email}</h3>

      <button onClick={()=> {setEmail('');setName('');setPassword('')}}>Clear</button>
    </form>
    </>
  )
}

export default App
