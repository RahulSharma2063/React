import './App.css'
import { useEffect } from 'react'
import UserList from './UserList'
import UserAdd from './UserAdd'
import { Route, Routes } from 'react-router'
import { NavLink, Link } from 'react-router'
import UserEdit from './UserEdit'

function App() {

  return (
    <>
    <ul className="flex text-2xl text-red-500 gap-10 font-semibold ml-6">
      <li>
        <NavLink to="/add"> Add User</NavLink>
      </li>
      <li>
        <NavLink to='/'> List</NavLink>
      </li>
    </ul>
      {/* <h1 className='flex justify-center text-center text-4xl font-bold'>Routes and Pages</h1> */}
      {/* <UserList/> */}

      {/* <UserAdd></UserAdd> */}
      <Routes>
        <Route path='/' element={<UserList/>}/>
        <Route path='add' element={<UserAdd/>}/>
        <Route path='/edit/:id' element={<UserEdit/>}/>
      </Routes>
    </>
  )
}

export default App

