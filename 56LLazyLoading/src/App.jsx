import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { lazy } from 'react'
import { Suspense } from 'react'
// import User from './User'

const User = lazy(()=> import('./User'))

function App() {
  const [load, setLoad] = useState(false)

  return (
    <>
      <div className="h-screen flex justify-center items-center">
  <div className="flex flex-col justify-center items-center h-[300px] w-[250px] bg-blue-200 border rounded">
          <h1>Lazy Loading</h1>
          {
            load ? <Suspense fallback={<h3>loading...</h3>}> <User/> </Suspense> : null
          }
          <button onClick={() => setLoad(true)} className='m-9 p-4 bg-blue-500'>Load User</button>
        </div>
      </div>
    </>
  )
}

export default App
