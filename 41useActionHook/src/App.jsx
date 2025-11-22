import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useActionState } from 'react'


function App() {

  const handleSubmit = async (previousData, formData) => {
    let name = formData.get('name');
    let password = formData.get('password');

    await new Promise(res => setTimeout(res, 2000))
    // console.log("handleSubmit called", name, password);
    if (name && password) {
      return { message: 'Data Submitted',name,password}
    } else {
      return { error: 'Failed to submit, Enter Proper data' }

    }

  }
  const [data, action, pendind] = useActionState(handleSubmit, undefined)
  console.log(data);
  


  return (
    <>
      <h1>useActionHook</h1>
      <form action={action}>
        <input defaultValue={data?.name} type="text" placeholder='enter name' name='name' />
        <br /><br />
        <input defaultValue={data?.password} type="password" placeholder='enter password' name='password' />
        <br /><br />
        <button disabled={pendind}>Submit data</button>
        <br /><br />
      </form>
        {
          data?.error && <span style={{color:'red'}}>{data?.error}</span>
        }
        {
          data?.message && <span style={{color:'green'}}>{data?.message}</span>
        }

        <h3>Name: {data?.name}</h3>
        <h3>Password: {data?.password}</h3>

    </>
  )
}

export default App
