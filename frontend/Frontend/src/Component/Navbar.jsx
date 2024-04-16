import React from 'react'
import {Link,NavLink} from "react-router-dom"
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='leftSide'><img src={logo} className='logo'></img></div>
      <div className='rightSide'>
      <NavLink to={'/'} className={({isActive}) =>` ${isActive ? "Ractive" : "R"}`}>
          HOME
          </NavLink>
      <NavLink to={'/predict'} className={({isActive}) =>` ${isActive ? "Ractive" : "R"}`}>
          PREDICT
          </NavLink>
      
      <NavLink to={'/about'} className={({isActive}) =>` ${isActive ? "Ractive" : "R"}`}>
          ABOUT US
          </NavLink>
          </div>
    </div>
  )
}

export default Navbar