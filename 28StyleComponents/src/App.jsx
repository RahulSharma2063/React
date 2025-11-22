import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from "styled-components"

function App() {
  // const Heading = styled.h1`
  // color:red;
  // border:1px solid green;
  // border-radius:5px;
  // margin:20px;
  // padding:10px;
  // `


  const Heading = styled.h1({
    color: 'red',
    border: '1px solid green',
    borderRadius: '5px',
    margin: '20px',
    padding: '10px'
}  )

const StyleBtn = styled.button`
color:red;
width:120px;
height:40px;
margin:20px
`

return (
  <>
    <Heading>Hello Heading</Heading>
    <StyleBtn>Login</StyleBtn>
  </>
)
}

export default App
