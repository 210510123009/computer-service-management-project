import React  from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Toast from 'react-hot-toast';
import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';
import AddServiceForm from '../../components/form/AddServiceForm';

const AddServices = () => {

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <AdminMenu/>
          </div>
          <div className="col-md-10">
            <h1 className='text-center mt-2'>Add Service</h1>
            <AddServiceForm/>
          </div>
        </div>
      </div>
      
    </Layout>
  )
}

export default AddServices