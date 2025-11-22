import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getUsersData()
  },[])
  
  async function getUsersData(){
    const url = "https://dummyjson.com/users";
    let respnose= await fetch(url);
    respnose = await respnose.json()
    
    setUsersData(respnose.users)
    
  }

  console.log(usersData);
  

  return (
    <>

      <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold text-indigo-600">Fetch Data From API</h1>

      {
        usersData && usersData.map((user)=>(
          
          <ul key={user.id} className="list-disc border-2 w-full px-6 text-left ">
            <li >{user.firstName} {user.lastName} Age: {user.age}</li>
          </ul>
        ))
      }
    </div>
    </>
  )
}

export default App
