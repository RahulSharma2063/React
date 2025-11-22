import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login, {Profile, Setting, UserKey} from './userComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Importing and Exporting Componensts</h1>
        <Login></Login>
        <Profile/>
        <Setting/>
        <h1>{UserKey}</h1>
      </div>
    </>
  )
}



export default App
