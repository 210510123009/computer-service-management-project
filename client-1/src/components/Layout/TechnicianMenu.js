import React from 'react'
import { NavLink } from 'react-router-dom'

const TechnicianMenu = () => {
  return (
    <header>
  <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-dark">
    <div className="position-sticky">
      <div className="list-group list-group-flush">
        <NavLink to='/techniciandashboard' className="list-group-item list-group-item-action py-2 ripple bg-dark text-white" aria-current="true"><span> dashboard</span></NavLink>
        <NavLink to='/techniciandashboard/technicianbookings'className="list-group-item list-group-item-action py-2 ripple bg-dark text-white"><span>Bookings</span></NavLink>
        <NavLink to='#' className="list-group-item list-group-item-action py-2 ripple bg-dark text-white"><span>Contact Us</span></NavLink>
        <NavLink to='#' className=" list-group-item-action py-2 ripple bg-dark text-white"><i className="fas fa-chart-bar fa-fw me-3 " /><span></span></NavLink>
        <NavLink to='#' className=" list-group-item-action py-2 ripple bg-dark text-white"><i className="fas fa-chart-bar fa-fw me-3 " /><span></span></NavLink>
        <NavLink to='#' className=" list-group-item-action py-2 ripple bg-dark text-white"><i className="fas fa-chart-bar fa-fw me-3 " /></NavLink>
        <NavLink to='#' className=" list-group-item-action py-2 ripple bg-dark text-white"><i className="fas fa-globe fa-fw me-3 " /></NavLink>
        <NavLink to='#' className=" list-group-item-action py-2 ripple bg-dark text-white"><i className="fas fa-building fa-fw me-3 " /></NavLink>
        <NavLink to='#' className=" list-group-item-action py-2 ripple bg-dark text-white"><i className="fas fa-calendar fa-fw me-3 " /></NavLink>
        <NavLink to='#' className=" list-group-item-action py-2 ripple bg-dark text-white"><i className="fas fa-users fa-fw me-3 " /></NavLink>
        <NavLink to='#' className=" list-group-item-action py-2 ripple bg-dark text-white"><i className="fas fa-money-bill fa-fw me-3 " /></NavLink>
      </div>
    </div>
  </nav>
</header>
  )
}

export default TechnicianMenu