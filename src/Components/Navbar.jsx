import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import s from '../App.module.css';
function Navbar() {
  return (
    <>
      <div class='w3-top w3-bar w3-black'>
        <NavLink to='/about' className='w3-bar-item w3-button' activeClassName={s.active}>
          About
        </NavLink>
        <NavLink to='/projects' className='w3-bar-item w3-button' activeClassName={s.active}>
          Projects
        </NavLink>
        <NavLink to='/contacts' className='w3-bar-item w3-button' activeClassName={s.active}>
          Contact
        </NavLink>
        {/* <Link to='#contact' className='w3-bar-item w3-button'>
          Log in
        </Link> */}
      </div>
    </>
  )
}

export default Navbar
