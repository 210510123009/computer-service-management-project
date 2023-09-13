import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import BookingForm from '../components/form/BookingForm';
import { useAuth } from '../context/auth';

const AllServiceList = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const [auth,setAuth] = useAuth()

    useEffect(()=>{
        fetch("http://127.0.0.1:8080/api/v1/service/get-all-service", {
          method: "get"
        }).then((res) => res.json())
          .then((data) => {
            console.log(data, "servicedata");
            setData(data.data)
          })
      }, []);

      const handelClick = (serviceName, detail, price) => {
        const Name = serviceName
        const Detail = detail
        const Price = price
        const UserID = auth.user._id;
        navigate('/bookingform', {state:{UserID,Name,Detail,Price}})
      }
    

  return (
    <Layout>
        <h1 className="text-center text-primary bg-dark p-3">All Service</h1>
        {
            data.map(i =>{ return (
                    <div className="container m-5">
                        <div key={i._id} className="row">
                            <div className="col-md-12">
                            <h3> {i.name}</h3>
                            </div>
                            <div className="col-md-4">
                                <p>{i.detail}</p>
                            </div>
                            <div className="col-md-4">
                                <h5>price: {i.price}Rs</h5>
                            </div>
                            <div className="col-md-4">
                            <button type="submit" className="btn btn-primary " onClick={() => handelClick(i.name, i.detail, i.price)}>Book Now</button>
                            </div>
                        </div>
                        <hr/>
                    </div>
                )
            })
        }
    </Layout>
  )
}

export default AllServiceList