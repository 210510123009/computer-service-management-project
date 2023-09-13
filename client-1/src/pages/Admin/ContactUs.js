import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'

const ContactUs = () => {
  return (
    <Layout>
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <AdminMenu/>
          </div>
          <div className="col-md-10">
            <h1>contact us</h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactUs