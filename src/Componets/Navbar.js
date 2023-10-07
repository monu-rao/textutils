import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-[100vw] bg-blue-600'>

    <nav className='flex justify-around items-center h-12 sm:w-[70vw] mx-auto bg-blue-600 text-white font-medium'>
    <span className=''><Link to="/">Home</Link>  </span>
    <span className=''><Link to="/about">About</Link>  </span>
    <span className=''> <Link to="/contact"> Contact Us </Link> </span>

    </nav>
    </div>
  )
}

export default Navbar




