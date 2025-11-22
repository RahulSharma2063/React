import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User.jsx'

function App() {
  const [count, setCount] = useState(0)

  const userData = [
    {
      name: 'Rahul',
      age: 21,
      email: 'Rahul@google.com',
      id: 1
    },
    {
      name: 'Sam',
      age: 25,
      email: 'Sam@google.com',
      id: 2
    },
    {
      name: 'Peter',
      age: 35,
      email: 'Peter@google.com',
      id: 3
    },
    {
      name: 'Anil',
      age: 19,
      email: 'Anil@google.com',
      id: 4
    }
  ]

  return (
    <>
    <div >
      <h1>Reuse</h1>
      {
        userData.map((user) => (
          <div key={user.id} >
            <User data={user} />
          </div>
        ))
      }

    </div>
      
    </>
  )
}

export default App
