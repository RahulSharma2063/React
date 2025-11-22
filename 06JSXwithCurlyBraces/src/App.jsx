import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name = "Rahul Sharma"
  const userOBJ = {
    name: "Rahul Sharma",
    email: "rahul@google.com",
    age: 21
  }
  const userArrays = ['Sam', 'Peter', 'Bruce']
  let x = 10;
  let y = 20
  let path="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9pfJM6VKaBv1iIzVD07dDMbLUYyKgChJSe9yaMmivKV6kKr7VH0zKmz5DCtIv-V_3XUrEicErKxTZT7Od4yHZBpafz6TbKnk7WeQXtVl0&s=10"

  function fruit() {
    return "Apple"
  }
  function sum(a, b) {
    return a + b
  }
  function oprt(a, b, op) {

    if (op == "+") {
      return a + b
    }
    else if (op == "-") {
      return a - b;
    }
    else {
      return a * b;
    }

  }

  return (
    <>
      <h1>{name ? name : "user not found"}</h1>
      <h1>{x + y}</h1>
      <h1>{fruit()}</h1>
      <h1>{sum(10, 60)}</h1>
      <h1>{oprt(20, 10, "+")}</h1>
      <h1>{userOBJ.email}</h1>
      <h1>{userArrays[0]}</h1>
      <input type="text" value={name} />
      <br />
      <br />
      <img 
      src={path}/>
    </>
  )
}

export default App
