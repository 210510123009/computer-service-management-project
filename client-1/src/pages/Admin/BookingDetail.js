import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';
import { useAuth } from '../../context/auth';
import { useLocation} from 'react-router-dom';
import  Toast  from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const BookingDetail = () => {

  const [auth, setAuth] = useAuth({})
  const [data, setData] = useState({})
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state.useremail;
  const id = location.state.bookingid;
  const service = location.state.servicename;

  // const user = axios.post(`http://127.0.0.1:8080/api/v1/auth/get-single-user`,{email})
  // console.log(user)
  
  const deleteBooking = (id,name,email) =>{
    if(window.confirm(`confirm delete service: ${name} user: ${email}`)){
      fetch("http://127.0.0.1:8080/api/v1/booking/deletebooking", {
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
            <h1 className='text-center mt-2'>booking detail</h1>
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-2">
                  <h3>Email :</h3>
                </div>
                <div className="col-md-3">
                  <h3>{location.state.useremail}</h3>
                </div>
              </div>
            </div>

            <div className="container mt-5">
              <div className="row">
                <div className="col-md-2">
                  <h3>service  :</h3>
                  <h3>price :</h3>
                  <h3>Message :</h3>
                </div>
                <div className="col-md-5">
                  <h3>{location.state.servicename}</h3>
                  <h3>{location.state.serviceprice}Rs</h3>
                  <h3>{location.state.usermessage}</h3>
                </div>
              </div>
            </div>
            <button type="button" class="btn btn-outline-danger" onClick={() => deleteBooking(id, service, email)}>delete</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BookingDetail