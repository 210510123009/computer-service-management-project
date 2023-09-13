import React, { useState } from 'react'
import Layout from '../Layout/Layout';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Toast from 'react-hot-toast';
import { useAuth } from '../../context/auth'

const BookingForm = (props) => {
    
    const location = useLocation();

    const navigate = useNavigate();

    const[auth,setAuth] = useAuth();
    const {_id,email} = auth.user;

    const [date, setDate] = useState();
    const [message, setMessage] = useState();
    const service = location.state.Name;
    const price = location.state.Price;
    const userid = location.state.UserID;

    
    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://127.0.0.1:8080/api/v1/booking/create-booking', {userid, email, service, price, date, message})
            if (res.data.message) {
                Toast.success(res.data.message);
                navigate("/");
            }
            else{
                Toast.error(res.data.error)
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <Layout>
    <h1 className='text-center text-primary bg-dark p-3'>Booking Form</h1>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-12">
               
                <h3>{location.state.Name}</h3>
            </div>
            <div className="col-md-4">
                {location.state.Detail}                
            </div>
            <div className="col-md-4">
                
                <h5>{location.state.Price}Rs</h5>
            </div>
            <div className="col-md-4">
                <div className="container">
                    <form onSubmit={handelSubmit}>
                    <input type="text" className="form-control"
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)} 
                        placeholder="Message"/>
                        <input type="date" className="form-control"
                        value={date}
                        onChange={(e)=>setDate(e.target.value)} 
                        placeholder="Enter Date"/>
                        <button type="submit" className="btn btn-primary">Book Now</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </Layout>
  )
}

export default BookingForm