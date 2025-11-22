import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [gender, setGender] = useState('Male')
  const [city, setCity] = useState('Jaipur')

  return (
    <>
    <h1>Radio Button</h1>
    <br />  <br />
    <h4>Select Gendedr</h4>
    <input  type="radio" onChange={(event) => setGender(event.target.value)} name='gender' value={"Male"} checked={gender == 'male'} id='male'/> 
    <label htmlFor="male">Male</label>
    <br /> <br />
    <input type="radio" onChange={(event) => setGender(event.target.value)} name='gender' value={"Female"} checked={gender == 'female'} id='female'/> 
    <label htmlFor="female">Female</label>
    <br /> <br /> <br />
    <h1>Selected Gender: {gender}</h1>
    <br /> <br />
    <h1>Select City</h1>
    <select onChange={(event) => setCity(event.target.value)} defaultValue={"Jaipur"}>
      <option value="Noide">Noide</option>
      <option value="Jaipur">Jaipur</option>
      <option value="Gurgav">Gurgav</option>
    </select>
    <br />
    <h3>Selected City: {city}</h3>
    </>
  )
}

export default App
