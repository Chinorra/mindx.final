import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <ul className='navbar'>
            <li className='navbar-item'>
                <Link to='/'>All</Link>
                </li>
            <li className='navbar-item'>
            <Link to='/active'>Active</Link>
                </li>
            <li className='navbar-item'>
            <Link to='/completed'>Completed</Link>
                </li>
        </ul>
        <hr/>
    </div>
  )
}

export default Navbar