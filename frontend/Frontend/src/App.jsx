import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet/>
    </>
  )
}

export default App
