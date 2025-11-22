import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const userRef=useRef();
  const passwordRef=useRef();

  const handleForm = (event) => {
    event.preventDefault();
    console.log(event);

    const user = document.querySelector('#user').value;
    const password = document.querySelector('#password').value;

    console.log(user);
    console.log(password);

  }

  const handleFormRef=()=>{
    event.preventDefault()
    const user = userRef.current.value
    const password = passwordRef.current.value
    console.log("handleFormRef", user, password);
    
  }

  return (
    <>
      <h1>Uncontrolled Component</h1>
      <form method='post' onSubmit={handleForm}>
        <input type="text" id='user' placeholder='enter user name' />
        <br /> <br />
        <input type="password" id='password' placeholder='enter password' />
        <br /> <br />
        <button>Submit</button>
      </form>
      <hr />

      <h1>Uncontrolled Component with useRef</h1>
      <form method='post' onSubmit={handleFormRef}>
        <input type="text" ref={userRef} id='userRef' placeholder='enter user name' />
        <br /> <br />
        <input type="password" ref={passwordRef} id='passwordRef' placeholder='enter password' />
        <br /> <br />
        <button>Submit with Ref</button>
      </form>

    </>
  )
}

export default App
