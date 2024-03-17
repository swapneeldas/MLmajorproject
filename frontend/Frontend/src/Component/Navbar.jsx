import React from 'react'
import {Link,NavLink} from "react-router-dom"
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <div className='Navbar'>
      <div ><img src={logo} className='logo'></img></div>
      <div className='rightSide'>
      <NavLink to={'/'} className={({isActive}) =>` ${isActive ? "Ractive" : "R"}`}>
          Predict
          </NavLink>
      <NavLink to={'/info'} className={({isActive}) =>` ${isActive ? "Ractive" : "R"}`}>
          info
          </NavLink>
      <NavLink to={'/about'} className={({isActive}) =>` ${isActive ? "Ractive" : "R"}`}>
          About Us
          </NavLink>
          </div>
    </div>
  )
}

export default Navbar