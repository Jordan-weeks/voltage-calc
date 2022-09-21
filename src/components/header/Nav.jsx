import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Nav = ({navOpen, setNavOpen, navRef}) => {
  return (
    <nav ref={navRef} className = {navOpen ? "nav-menu expanded" : "nav-menu"}>
      <div className='exit' onClick={() => setNavOpen(false)}>X</div>
      <div className="link-container">
      <Link onClick={() => setNavOpen(false)} to="/">Home</Link>
      <Link onClick={() => setNavOpen(false)} to="voltage-calculator">Voltage Drop Calculator</Link> 
      <Link onClick={() => setNavOpen(false)} to="/tables">Tables</Link>
      <Link onClick={() => setNavOpen(false)} to="about">About</Link>
      </div>
      
    </nav>
  )
}

export default Nav