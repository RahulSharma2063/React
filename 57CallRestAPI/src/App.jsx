import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react';
import { Suspense } from 'react';

const fetchData = () => fetch('https://dummyjson.com/users').then((response) => response.json());



const userResource = fetchData();


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center h-[300px] w-[250px] bg-blue-200 border rounded">
          <h1 className='font-bold text-2xl '>Use API</h1>
          <Suspense fallback={<p>loading..</p>}>
            <User userResource={userResource}/>
          </Suspense>
        </div>
      </div>

    </>
  )
}

export default App

const User = ({userResource}) => {

  const userData = use(userResource)
  console.log(userData.users);
  
  return (
    <div>
      <h1>User List</h1>
      {
        userData.users.map((user, index)=> (
          <h1 key={index}>{user.firstName}</h1>
        ))
      }
    </div>
  )
}