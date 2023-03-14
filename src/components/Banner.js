import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <ul className='nav'>
        <li className='nav-item'>
            <Link className='nav-link' to='http://localhost:3000/'>Home</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link' to='http://localhost:3000/articles'>Articles</Link>
        </li>
    </ul>
  )
}

export default Banner