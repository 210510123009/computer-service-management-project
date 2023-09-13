import React from 'react'
import Layout from './Layout'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/auth'

const UserMenu = () => {

  return (
    <header>
  <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-dark">
    <div className="position-sticky">
      <div className="list-group list-group-flush">
        <NavLink to="/dashboard" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white" aria-current="true">
          <i className="fas fa-tachometer-alt fa-fw me-3" /><span>dashboard</span>
        </NavLink>
        <NavLink to='/mybooking' className="list-group-item list-group-item-action py-2 ripple bg-dark text-white">
          <i className="fas fa-chart-area fa-fw me-3" /><span>My Bookings</span>
        </NavLink>
        <NavLink to="/updatepassword" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white">
          <i className="fas fa-lock fa-fw me-3 " /><span>Update Password</span></NavLink>
        <NavLink to="/updateprofile" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white">
          <i className="fas fa-chart-line fa-fw me-3 " /><span>update profile</span></NavLink>
        {/* <NavLink to="/updateprofile" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white">
          <i className="fas fa-chart-pie fa-fw me-3" /><span></span>
        </NavLink> */}
        <NavLink to="#" className=" list-group-item-action py-2 ripple bg-dark text-white"><i className="fas fa-chart-bar fa-fw me-3 " /></NavLink>
        <NavLink to="#" className=" list-group-item-action py-2 ripple bg-dark text-white"><i className="fas fa-globe fa-fw me-3 " /></NavLink>
        <NavLink to="#" className=" list-group-item-action py-2 ripple bg-dark text-white"><i className="fas fa-building fa-fw me-3 " /></NavLink>
        <NavLink to="#" className=" list-group-item-action py-2 ripple bg-dark text-white"><i className="fas fa-calendar fa-fw me-3 " /></NavLink>
        <NavLink to="#" className=" list-group-item-action py-2 ripple bg-dark text-white"><i className="fas fa-users fa-fw me-3 " /></NavLink>
        <NavLink to="#" className=" list-group-item-action py-2 ripple bg-dark text-white"><i className="fas fa-money-bill fa-fw me-3 " /></NavLink>
      </div>
    </div>
  </nav>
</header>
  )
}

export default UserMenu