import React from 'react'
import Layout from '../../components/Layout/Layout'
import TechnicianMenu from '../../components/Layout/TechnicianMenu'
import TechnicianProfile from './TechnicianProfile'

const TechnicianDashboard = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <TechnicianMenu/>
          </div>
          <div className="col-md-10">
           <TechnicianProfile/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TechnicianDashboard