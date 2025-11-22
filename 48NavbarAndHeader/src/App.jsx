import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'
import About from './About'
import Login from './Login'
import Home from './Home'
import College from './College'
import PageNotFound from './PageNotFound'
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Student from './Student'
import Department from './Department'
import Details from './Details'
import Users from './Users'
import UsersDetails from './UsersDetail'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <NavBar /> */}
      <Routes>

        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path='/users/list?' element={<Users/>}/>

          <Route path='/users/:id/:name?' element={<UsersDetails/>}/>

          <Route path='user'>
            <Route path="/user/about" element={<About />} />
            <Route path="/user/login" element={<Login />} />
          </Route>
        </Route>

        <Route path='/college' element={<College />}>
          <Route index element={<Student />} />
          <Route path='department' element={<Department />} />
          <Route path='details' element={<Details />} />
        </Route>

        <Route path='/*' element={<PageNotFound />} />

        {/* <Route path='/*' element={<Navigate to="/"/>}/> */}

      </Routes>
    </>
  )
}

export default App
