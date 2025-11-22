import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useFormStatus } from 'react-dom'

function App() {

  const handleSubmit = async () => {
    await new Promise(res => setTimeout(res, 2000));
    console.log("Submit");

  }
  function CustomerForm() {
    const { pending } = useFormStatus();
    console.log(pending);


    return (
      <div style={{ display: 'flex', flexDirection: 'column', width: '200px', gap: '25px' }}>
        <input type="text" placeholder='Enter Name' />
        <input type="password" placeholder='Enter Password' />
        <button
          disabled={pending}
          style={{
            minWidth: '80px',
            padding: '6px 12px',
            transition: 'all 0.3s ease',
            width: pending ? '120px' : '80px',
          }}
        >{pending ? 'Submitting...' : 'Submit'}</button>
      </div>
    )
  }

  return (
    <>
      <h1>useFormStatus</h1>
      <form action={handleSubmit}>
        <CustomerForm />
      </form>
    </>
  )
}

export default App
