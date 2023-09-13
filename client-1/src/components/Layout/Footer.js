import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/auth'

const Footer = () => {
  const [auth, setAuth] =useAuth();

  return (
    <>
    <div className="container-fluid bg-dark p-2">
      <h4 className='text-center text-white'>All Right Reserved &copy; Service Booking</h4>
      <p className="text-center">
          {/* {
            auth.user.role === 0 ? (<NavLink to="/about">About</NavLink>|<NavLink to="/contact">Contact</NavLink>):(
              <><p className='text-white mt-3'>DASHBOARD</p></>
            )
          } */}
        <NavLink to="/about">About</NavLink>|<NavLink to="/contact">Contact</NavLink>
      </p>
    </div>
    </>
  )
}

export default Footer