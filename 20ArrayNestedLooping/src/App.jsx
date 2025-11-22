import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import College from './College'



function App() {
  const collegeData = [
    {
      name: "IIT Delhi",
      city: "Delhi",
      website: "iitd.ac.in",
      student:[
        {
          name: "Rahul",
          age: 21,
          email: "rahul@test.com"
        },
        {
          name: "Anil",
          age: 24,
          email: "anil@test.com"
        },
        {
          name: "Rohal",
          age: 20,
          email: "rohan@test.com"
        }
      ]
    },
    {
      name: "JECRC",
      city: "Jaipur",
      website: "jecrcuniversity.edu.in",
      student:[
        {
          name: "Rahul",
          age: 21,
          email: "rahul@test.com"
        },
        {
          name: "Anil",
          age: 24,
          email: "anil@test.com"
        },
        {
          name: "Rohal",
          age: 20,
          email: "rohan@test.com"
        }
      ]
    },
    {
      name: "MNIT",
      city: "Mumbai",
      website: "mnit.ac.in",
      student:[
        {
          name: "Rahul",
          age: 21,
          email: "rahul@test.com"
        },
        {
          name: "Anil",
          age: 24,
          email: "anil@test.com"
        },
        {
          name: "Rohal",
          age: 20,
          email: "rohan@test.com"
        }
      ]
    }
  ]

  return (
    <>
    <div>
      {
        collegeData.map((college, index) => (
          <div key={index}>
          <College college={college}/>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default App


