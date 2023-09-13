import React from 'react'
import TechnicianMenu from '../../components/Layout/TechnicianMenu'
import Layout from '../../components/Layout/Layout'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const TechnicianBookings = () => {

  const [data,setData] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    fetch("http://127.0.0.1:8080/api/v1/booking/get-all-booking", {
      method: "get"
    }).then((res) => res.json())
      .then((data) => {
        console.log(data, "bookingdata");
        setData(data.data)
      })
  }, []);

  const showBookingDetail = (id,name,email,message,price) =>{
        const bookingid = id;
        const servicename = name;
        const useremail = email;
        const usermessage = message;
        const serviceprice = price;
        navigate('/techniciandashboard/technicianbookingdetail', {state:{bookingid,servicename,useremail,usermessage,serviceprice}})
  }

  return (
    <Layout>
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <TechnicianMenu/>
          </div>
          <div className="col-md-10">
            <h1 className='text-center mt-2'>Bookings</h1>
            <div className="container mt-5">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col" className='bg-dark text-white'>#</th>
                    <th scope="col" className='bg-dark text-white'>User Email</th>
                    <th scope="col" className='bg-dark text-white'>Booking</th>
                    <th scope="col" className='bg-dark text-white'>date</th>
                    <th scope="col" className='bg-dark text-white'>delete</th>
                  </tr>
                </thead>
                <tbody>  
                {
                    data.map(i=>{
                      return(
                        <tr>
                          <th scope="row"></th>
                          <td className='m-2 p-2'>{i.email}</td>
                          <td className='m-2 p-2'>{i.service}</td>
                          <td className='m-2 p-2'>{i.date}</td>
                          <td className='m-2 p-2'><FontAwesomeIcon icon={faTrash} onClick={() => showBookingDetail(i._id, i.service, i.email, i.message, i.price)}/></td>
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

export default TechnicianBookings