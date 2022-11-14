import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <header id='navbar'>
      <div className="navbar flex justify-between h-24">
        <div className="nav-left flex items-center flex-1 gap-8">
          <div className="nav-logo text-xl font-bold">IOSdev</div>
          <Toggle/>
        </div>
        <div className="nav-right flex flex-1 items-center justify-center font-normal">
          <div className="nav-list flex-[2_2_0%]">
            <ul className='nav-item flex gap-8 mr-16'>
            <Link to='home' smooth={true} spy={true}>
            <li>Home</li>
            </Link>
            <Link to='about' smooth={true} spy={true}>
            <li>About</li>
            </Link>
            <Link to='contact' smooth={true} spy={true}>
            <li>Portfolio</li>
            </Link>
            </ul>
          </div>
          <Link to='contact' smooth={true} spy={true}>
            <a href='#contact' className="nav-btn">
              Contact
            </a>
          </Link>
          
        </div>
      </div>
    </header>
  )
}

export default Navbar