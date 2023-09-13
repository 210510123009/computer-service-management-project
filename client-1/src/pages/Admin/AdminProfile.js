import React from 'react'
import { useAuth } from '../../context/auth';

const AdminProfile = () => {
    const [auth, setAuth] = useAuth();
  return (
    <div className="container">
        <h2 className='text-center mt-4'>Profile</h2>
        <h4 className='text-center'>Name : {auth.user.name}</h4>
        <h4 className='text-center'>Email : {auth.user.email}</h4>
        <h4 className='text-center'>Phone : {auth.user.phone}</h4>
    </div>
  )
}

export default AdminProfile