import React from 'react'
import {FiMenu} from "react-icons/fi"
import Nav from './Nav'
import "./header.css"
const Header = ({navOpen, setNavOpen, navRef}) => {


  return (
    <header>
        <FiMenu onClick={() => setNavOpen(!navOpen)}></FiMenu>
        <Nav navOpen={navOpen} setNavOpen={setNavOpen} navRef={navRef} ></Nav>
        <p>Electrician Toolbox </p>
    </header>
  )
}

export default Header