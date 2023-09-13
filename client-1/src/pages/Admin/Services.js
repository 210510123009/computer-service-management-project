import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import { useState } from 'react'
import { useEffect } from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'

const Services = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch("http://127.0.0.1:8080/api/v1/service/get-all-service", {
      method: "get"
    }).then((res) => res.json())
      .then((data) => {
        console.log(data, "serviceData");
        setData(data.data)
      })
  }, []);

  const deleteService = async (id,name) => {
    if(window.confirm(`confirm delete : ${name} service`)){
      fetch("http://127.0.0.1:8080/api/v1/service/deleteservice", {
        method:"DELETE",
        crossDomain: true,
        headers:{
          "Content-Type": "application/json",
          Accept : "application/json",
          "Access-Control-Allow-Origin":"*",
        },
        body: JSON.stringify({
          _id : id,
          name: name,
        })
      }).then((res) => res.json())
        .then((data) => {
          alert(data.data);
      })
    };
  }


  return (
    <Layout>
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <AdminMenu/>
          </div>
          <div className="col-md-10">
            <h1 className='text-center mt-2'>Services</h1>
            <div className="container mt-5">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col" className='bg-dark text-white'>#</th>
                    <th scope="col" className='bg-dark text-white'>Service Name</th>
                    <th scope="col" className='bg-dark text-white'>Price</th>
                    <th scope="col" className='bg-dark text-white'>Edit</th>
                  </tr>
                </thead>
                <tbody>  
                {
                    data.map(i=>{
                      return(
                        <tr>
                          <th scope="row"></th>
                          <td className='m-2 p-2'>{i.name}</td>
                          <td className='m-2 p-2'>{i.price}</td>
                          {/* <td className='m-2 p-2'>{i.price}</td> */}
                          <td className='m-2 p-2'><FontAwesomeIcon icon={faTrash} onClick={() => deleteService(i._id, i.name)}/></td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Services