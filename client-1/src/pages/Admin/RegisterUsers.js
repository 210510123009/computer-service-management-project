import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RegisterUsers = () => {

  const [data, setData] = useState([]);
  
  useEffect(()=>{
    fetch("http://127.0.0.1:8080/api/v1/auth/get-all-users", {
      method: "get"
    }).then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.data)
      })
  }, []);

  const deleteUser = (id, name, email) => {
    if(window.confirm(`confirm delete with Email : ${email}`)){
      fetch("http://127.0.0.1:8080/api/v1/auth/deleteuser", {
        method:"POST",
        crossDomain: true,
        headers:{
          "Content-Type": "application/json",
          Accept : "application/json",
          "Access-Control-Allow-Origin":"*",
        },
        body: JSON.stringify({
          _id : id,
          name: name,
          email: email
        })
      }).then((res) => res.json())
        .then((data) => {
          alert(data.data);
      })
      
    }
  }

  return (
    <Layout>
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <AdminMenu/>
          </div>
          <div className="col-md-10">
            <h1 className='text-center mt-2'>Register Users</h1>
            <div className="container mt-5">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col" className='bg-dark text-white'>#</th>
                    <th scope="col" className='bg-dark text-white'>Name</th>
                    <th scope="col" className='bg-dark text-white'>Email</th>
                    <th scope="col" className='bg-dark text-white'>Phone</th>
                    <th scope="col" className='bg-dark text-white'>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map(i=>{
                      return(
                        <tr>
                          <th scope="row"></th>
                          <td className='m-2 p-2'>{i.name}</td>
                          <td className='m-2 p-2'>{i.email}</td>
                          <td className='m-2 p-2'>{i.phone}</td>
                          <td className='m-2 p-2'><FontAwesomeIcon icon={faTrash} onClick={() => deleteUser(i._id, i.name, i.email)}/></td>
                      
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

export default RegisterUsers