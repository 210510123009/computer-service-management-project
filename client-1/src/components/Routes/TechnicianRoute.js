import React from 'react'
import { useAuth } from '../../context/auth';
import { Outlet, useNavigate } from 'react-router-dom';
import Spinner from '../Spinner';

const TechnicianRoute = () => {

    const [auth,setAuth] = useAuth();
    
    const navigate = useNavigate();
    
    let role = localStorage.getItem("role");
            
        if(role != 2){
          navigate('/login');
        }


  return (
    role ? <Outlet/>:<Spinner/>
  )
}

export default TechnicianRoute