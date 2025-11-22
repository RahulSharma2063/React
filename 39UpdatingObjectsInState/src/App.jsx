import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [data, setData] = useState({
    name:"Rahul",
    address:{
      city:'Jaipur',
      country:'India'
    }
  })

  const handleName=(val)=>{
    data.name=val
    console.log(val);

    setData({...data})
    
  }
  const handleCity=(city)=>{
    data.address.city=city;
    console.log(city);

    setData({...data,address:{...data.address}})
    
  }
  const handleCountry=(country)=>{
    data.address.country=country;
    console.log(country);

    setData({...data,address:{...data.address}})
    
  }
  

  return (
    <>
      <h1>Updating Objects in States</h1>
      
      <input type="text" placeholder='update name' onChange={(event)=>handleName(event.target.value)} />
      <input type="text" placeholder='update city' onChange={(event)=>handleCity(event.target.value)} />
      <input type="text" placeholder='update city' onChange={(event)=>handleCountry(event.target.value)} />
      <h2>Name: {data.name}</h2>
      <h2>City: {data.address.city}</h2>
      <h2>Country: {data.address.country}</h2>
    </>
  )
}

export default App
