import React from 'react'
import {Link} from 'react-router-dom'

const NavbarAnonym = () => {
  return (
    <div className="navbar bg-white px-5 md:px-14 flex justify-between mb-3 sticky top-0 z-10 shadow-sm">
        <div>
          <Link to="/">
            <a className="font-semibold text-2xl"><span className='text-secondary'>sosi</span><span className='text-primary'>alta</span></a>
            </Link>
        </div>
        <div className="form-control ">  
            <input type="text" placeholder="Search" className="bg-main rounded-lg p-2 hidden md:block" /> 
        </div>
        <div className="flex-none font-semi-bold text-xs space-x-3">
            <Link to="/login">
            <button className='bg-[#FEF3EB] w-20 rounded-md py-2 px-3 text-delete '>Log In</button>
            </Link>
            <Link to="/register">
            <button className='bg-primary w-20 rounded-md py-2 px-3 text-white '>Sign Up</button>
            </Link>
            
            
        </div>
    </div>
  )
}

export default NavbarAnonym;