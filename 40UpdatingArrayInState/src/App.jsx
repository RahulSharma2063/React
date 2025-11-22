import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState(['Rahul', 'Sameer', 'Vipul'])

  const handleUser=(name)=>{
    console.log(name);
    
    data[data.length-1] = name;
    setData([...data])

  }
  const handleAge=(age)=>{
    console.log(age);
    
    dataDetails[data.length-1].age = age;
    setDataDetails([...dataDetails])
  }

  const [dataDetails, setDataDetails] = useState([
    {name:'Rahul', age: '21'},
    {name:'Sameer', age: '24'},
    {name:'Vipul', age: '22'}
  ])

  return (
    <>
      <h1>Upadting Array in State</h1>
      <input type="text" placeholder='Enter last Username'
      onChange={(e)=>handleUser(e.target.value)}/>
      {
        data.map((item,index)=>(
          <h3 key={index}>{item}</h3>
        ))
      }
      <hr />

        <input type="text" placeholder='Enter last Age'
      onChange={(e)=>handleAge(e.target.value)}/>

      {
      dataDetails.map((item,index)=>(
        <h4 key={index}>{item.name}, {item.age}</h4>
      ))
      }
    </>
  )
}
export default App
