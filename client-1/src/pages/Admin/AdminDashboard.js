import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import { useAuth } from '../../context/auth'
import AdminProfile from './AdminProfile'

const AdminDashboard = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <AdminMenu/>
          </div>
          <div className="col-md-10">
           <AdminProfile/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AdminDashboard