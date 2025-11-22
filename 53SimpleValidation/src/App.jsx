import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [nameErr, setNameErr] = useState('')

  const [password, setPassword] = useState('')
  const [passErr, setPassErr] = useState('')

  const handleName = (event) => {
    console.log(event.target.value);
    if (event.target.value.length > 5) {
      setNameErr("Please Enter Valid username, only 5 character allowed")
    }
    else {
      setNameErr()
    }
  }
  const handlePassword = (event) => {
    let regex = /^[A-Z0-9]+$/i;
    if (regex.test(event.target.value)) {
      setPassErr("")
    }
    else {
      setPassErr('Please Enter Valid password, only nums and apha allowed')
    }
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className='flex flex-col justify-center m-[10px] p-[10px] gap-[10px] bg-blue-100 rounded-lg w-[250px]'>
        <input className={`p-2 border border-gray-400 rounded outline-none ${nameErr ? "error" : ""}`} type="text" onChange={handleName} placeholder='enter name' />
        <span className='red'>{nameErr && nameErr}</span>
        <input onChange={handlePassword} type="text" placeholder='enter password' className={`p-2 border border-gray-400 rounded outline-none ${passErr ? 'error' : ''}`} />
        <span className='red'>{passErr && passErr}</span>
        <button
          disabled={nameErr || passErr}
          className={`p-2 rounded text-white border 
    ${nameErr || passErr
              ? "bg-gray-400 border-gray-300 text-gray-700 cursor-not-allowed"
              : "bg-blue-500 border-blue-500"
            }
  `}
        >
          Login
        </button>

      </div>
    </div>
  )
}

export default App
