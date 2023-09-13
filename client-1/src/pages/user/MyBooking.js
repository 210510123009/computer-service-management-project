import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import { useLocation } from 'react-router-dom'


const MyBooking = () => {

  const email = localStorage.getItem('email')

  const [data,setData] = useState([]);
  
  const mybooking = [];

  useEffect(()=>{
    fetch("http://127.0.0.1:8080/api/v1/booking/get-all-booking", {
      method: "get"
    }).then((res) => res.json())
      .then((data) => {
        console.log(data, "bookingdata");
        setData(data.data)
      })
  }, []);

  console.log(data)

  const filter = (item) =>{
    if(item.email == email){
      mybooking.push(item);
    }
  }
  data.forEach(filter)

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <UserMenu/>
          </div>
          <div className="col-md-10">
            <h1 className='text-center mt-2'>My Bookings</h1>
            <div className="container mt-5">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col" className='bg-dark text-white'>#</th>
                    <th scope="col" className='bg-dark text-white'>Service Name</th>
                    <th scope="col" className='bg-dark text-white'>Price</th>
                    <th scope="col" className='bg-dark text-white'>Date</th>
                  </tr>
                </thead>
                <tbody>  
                {
                    mybooking.map(i=>{
                      return(
                        <tr>
                          <th scope="row"></th>
                          <td className='m-2 p-2'>{i.service}</td>
                          <td className='m-2 p-2'>{i.price}</td>
                          <td className='m-2 p-2'>{i.date}</td>
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

export default MyBooking