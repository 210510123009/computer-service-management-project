import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import Profile from './Profile'


const Dashboard = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <UserMenu/>
          </div>
          <div className="col-md-10">
            <Profile/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard