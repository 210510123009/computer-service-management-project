import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/auth'
import Toast from 'react-hot-toast';


const Header = () => {

  const [auth,setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth, 
      user:null,
      token:''
    })
    localStorage.removeItem('auth');
    localStorage.removeItem('login');
    localStorage.removeItem('role');
    localStorage.removeItem('type');

    Toast.success("logout successfully")
  }

  return (

    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to='/' className="navbar-brand px-3">Computer Service</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
      <div className="collapse navbar-collapse px-3" id="navbarNav">
        <ul className="navbar-nav ms-auto">
      {
        !auth.user ? (<>
        <li className="nav-item">
        <NavLink to='/login' className="nav-link"><button type="button" class="btn btn-outline-success">Login</button></NavLink>
      </li>
      <li className="nav-item">
        <NavLink to='/register' className="nav-link"><button type="button" class="btn btn-outline-primary">Register</button></NavLink>
      </li>
        </>) : (<>
                  {
                    auth.user.role === 0? (<>
                    <NavLink to='/' className='nav-link mx-2'><button type="button" class="btn btn-success">User</button></NavLink>
                    <p className='mt-2'>|</p></>) : 
                    (<>
                      {
                        auth.user.role === 1? (<>
                        <NavLink to='/admindashboard' className='nav-link mx-2'><button type="button" class="btn btn-success">Admin</button></NavLink>
                        <p className='mt-2'>|</p>
                        </>) : (
                          <>
                            <NavLink to='/techniciandashboard' className='mx-2 nav-link'><button type="button" class="btn btn-success">Technician</button></NavLink>
                            <p className='mt-2'>|</p>
                          </>
                        )
                      }
                      </>)
                    
                  }
            <NavLink className='mx-2 nav-link' to='/dashboard'><button type="button" class="btn btn-outline-secondary">{auth.user.name}</button></NavLink>
            <p className='mt-2'>|</p>
            
          <li className="nav-item">
        <NavLink to='/login'onClick={handleLogout} className="nav-link mx-2"><button type="button" class="btn btn-outline-danger">Logout</button></NavLink>
      </li></>)
      }
    </ul>
  </div>
</nav>

    </>
  )
}

export default Header