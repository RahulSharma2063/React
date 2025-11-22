import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [userData, setUserData] = useState([])

  const[loading, setLoading] = useState(false)

  useEffect(()=> {
    setLoading(true)
    getUserData();
  },[])
  
  const getUserData= async() =>{
    const url="http://localhost:3000/users";
    let response = await fetch(url)
    response = await response.json();
    console.log(response);
    setUserData(response)
    setLoading(false)
    
  }

  return (
    <div className="flex flex-col justify-center font-bold text-4xl text-blue-500 space-y-6">
      <h1 >Integrate JSON Server API and Loader</h1>

      <ul className='user-list'>
            <li>Name</li>
            <li>Age</li>
            <li>Email</li>
          </ul>

      {
        !loading?

        userData.map((user, index)=>(
          <ul key={index} className='user-list'>
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li>{user.email}</li>
          </ul>
        ))
        : <h1 className='h-screen flex justify-center text-center '>Data Loading...</h1>
      }
    </div>
  )
}

export default App

