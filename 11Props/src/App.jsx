import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User.jsx'
import College from './College.jsx'
import Student from './Student.jsx'

function App() {
  // userName = "rahul sharma"
  // let age = 20;
  // let email = "rahul@test.com"

  let userObject = {
    name: "rahul sharma",
    age: 20,
    email: "rahul@test.com"
  }
  let userObject2 = {
    name: "Anil sharma",
    age: 32,
    email: "anil@test.com"
  }
  let collegeNames = ["JECRC", "MIT", "IIT" , "DU", "NIT"]

  const [student, setStudent] = useState()

  return (
    <>
      {/* <User name="Rahul Sharma" age={21} email="rahul@google.com" /> */}
      {/* <User name={userName} age={age} email={email}/> */}
      <College name={collegeNames}/>


      { student && <Student name={student}/>}
      <button onClick={() => setStudent("Sam")}>Update Student Name</button>

      {/* <User user={userObject}/> */}
      {/* <User user={userObject2}/> */}
    </>
  )
}

export default App
