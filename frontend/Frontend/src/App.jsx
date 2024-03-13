import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Uploadfile from './Component/uploadfile'
function App() {
 let [a,seta]=useState(5)
 let [something, setsomething]=useState(null);
 let [ndstate,setndstate]=useState(5);

 
  return (
    <>
      <Navbar></Navbar>
      <Uploadfile></Uploadfile>
    </>
  )
}

export default App
