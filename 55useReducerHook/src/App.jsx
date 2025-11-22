import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReducer } from 'react'

const emptyData={
  name:'',
  email:'',
  city:'',
  address:''
}

const reducer=(data,action)=>{
  return{...data,[action.type]:action.val}
  
}

function App() {

  const [state,dispatch] = useReducer(reducer,emptyData)
  console.log(state);
  


  return (
    
      <div className='flex flex-col justify-center items-center h-screen '>
        <h1 className="font-bold text-2xl">Use Reducer</h1>

        <div className='flex flex-col w-60 bg-blue-100 gap-4 p-3'>

        <input type="text" onChange={(event)=>dispatch({val:event.target.value, type:'name'})} placeholder='enter name' className='border rounded p-1'/>
        <input type="text" onChange={(event)=>dispatch({val:event.target.value, type:'password'})} placeholder='enter password' className='border rounded p-1'/>
        <input type="text" onChange={(event)=>dispatch({val:event.target.value, type:'email'})} placeholder='enter email' className='border rounded p-1'/>
        <input type="text" onChange={(event)=>dispatch({val:event.target.value, type:'city'})} placeholder='enter city' className='border rounded p-1'/>
        <input type="text" onChange={(event)=>dispatch({val:event.target.value, type:'address'})} placeholder='enter address' className='border rounded p-1'/>

        <ul>
          <li>Name:{state.name}</li>
          <li>Password:{state.password}</li>
          <li>Email:{state.email}</li>
          <li>City:{state.city}</li>
          <li>Address:{state.address}</li>
        </ul>

        <button className='rounded p-1 bg-blue-500'>Add Details</button>
        </div>
      </div>
    
  )
}

export default App
