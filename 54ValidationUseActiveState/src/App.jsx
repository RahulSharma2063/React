import { useActionState, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleLogin = (prevData, formData) => {
    let name = formData.get('name')
    let password = formData.get('password')
    let regex = /^[A-Z0-9]+$/i;

    if (!name || name.length > 5) {
      return { error: 'Name should not contain more than 5 characters', name, password }

    } else if (!regex.test(password)) {
      return { error: 'Password can contain only number and alphabets', name, password }

    } else {
      return { message: 'Login done!', name, password }
    }



  }

  const [data, action, pending] = useActionState(handleLogin);
  console.log(data);


  return (
    <>

      <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className='font-bold text-xl mb-4'>Validation</h1>
        <form className='w-60 flex flex-col gap-[15px] p-5 m-5 bg-blue-100 rounded' action={action}>
          <input defaultValue={data?.name} className=' border rounded p-1' type="text" name='name' placeholder='enter username' />
          <input defaultValue={data?.password} className='border rounded p-1' type="text" name='password' placeholder='enter password' />
          {
            data?.message && <span className='text-green-600'>{data?.message}</span>
          }
          {
            data?.error && <span className='text-red-500'>{data?.error}</span>
          }
          <button
            disabled={data?.error}
            className={`rounded h-9 w-full 
    ${data?.error ? "bg-gray-400 cursor-not-allowed" : "bg-blue-400 hover:bg-blue-500"}
  `}>
            Login
          </button>
        </form>
      </div>
    </>
  )
}

export default App
