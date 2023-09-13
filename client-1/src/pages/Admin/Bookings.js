import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import { useEffect } from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink, useNavigate } from 'react-router-dom'

const Bookings = () => {

  const [data,setData] = useState([])

  const navigate = useNavigate();

  useEffect(()=>{
    fetch("http://127.0.0.1:8080/api/v1/booking/get-all-booking", {
      method: "get"
    }).then((res) => res.json())
      .then((data) => {
        console.log(data, "bookingdata");
        setData(data.data)
      })
  }, []);

  // const deleteBooking = (id,name,email) =>{
  //   if(window.confirm(`confirm delete service: ${name} user: ${email}`)){
  //     fetch("http://127.0.0.1:8080/api/v1/booking/deletebooking", {
  //       method:"POST",
  //       crossDomain: true,
  //       headers:{
  //         "Content-Type": "application/json",
  //         Accept : "application/json",
  //         "Access-Control-Allow-Origin":"*",
  //       },
  //       body: JSON.stringify({
  //         _id : id,
  //         name: name,
  //         email: email
  //       })
  //     }).then((res) => res.json())
  //       .then((data) => {
  //         alert(data.data);
  //     })
      
  //   }
  // }

  const showBookingDetail = (id,name,email,message,price) => {
        const bookingid = id;
        const servicename = name;
        const useremail = email;
        const usermessage = message;
        const serviceprice = price;
        navigate('/bookingdetail', {state:{bookingid,servicename,useremail,usermessage,serviceprice}})
  }

  return (
    <Layout>
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <AdminMenu/>
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
                    <th scope="col" className='bg-dark text-white'>edit</th>
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

export default Bookings