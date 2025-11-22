import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const userName = ['Rahul', 'Sam', 'Anil', 'Peter'];
  const userCollege = ['JECRC', 'IIT', 'NIT', 'MIT'];

  const userData = [
    {
      name: 'Rahul',
      age: 21,
      email: 'Rahul@google.com',
      id: 1
    },
    {
      name: 'Sam',
      age: 25,
      email: 'Sam@google.com',
      id: 2
    },
    {
      name: 'Peter',
      age: 35,
      email: 'Peter@google.com',
      id: 3
    },
    {
      name: 'Anil',
      age: 19,
      email: 'Anil@google.com',
      id: 4
    }
  ]

  return (
    <>
      <h1>Loop in Map Function</h1>
      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((user) => (
              <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
          </tr>
            ))
          }
        </tbody>
      </table>

      <h2>Dummy Data</h2>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Rahul</td>
            <td>rahul@google.com</td>
            <td>21</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Sam</td>
            <td>sam@google.com</td>
            <td>24</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Peter</td>
            <td>peter@google.com</td>
            <td>35</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Anil</td>
            <td>anil@google.com</td>
            <td>19</td>
          </tr>

        </tbody>
      </table>
    </>
  )
}

export default App
