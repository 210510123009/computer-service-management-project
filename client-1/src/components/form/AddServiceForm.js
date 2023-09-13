import React from 'react'
import { useNavigate } from 'react-router-dom';
import Toast from 'react-hot-toast';
import { useState } from 'react';
import axios from 'axios';


const AddServiceForm = () => {

    const [name, setName] = useState("");
    const [detail, setDetail] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();

    const handelSubmit = async (e)=>{
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/service/create-service`,{name,detail,price});
            if (res.data.success) {
                Toast.success(res.data.message);
                navigate("/admindashboard/services");
            } else{
                Toast.error(res.message.error)
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <form onSubmit={handelSubmit}>
            <label for="exampleInputName">Service Name</label>
            <div className="form-group">
              <input type="text" 
              className="form-control"
              value={name}
              onChange={(e)=>setName(e.target.value)} 
              placeholder="Enter Service Name" />
            </div>

    
            <label for="exampleInputDetail">Enter Detail</label>
            <div className="form-group">
              <input type="text" 
              className="form-control"
              value={detail}
              onChange={(e)=>setDetail(e.target.value)} 
              placeholder="Enter Service Detail" />
            </div>

            
            <label for="exampleInputPrice">Enter Price</label>
            <div className="form-group">
              <input type="text" 
              className="form-control"
              value={price}
              onChange={(e)=>setPrice(e.target.value)} 
              placeholder="Enter Service price" />
            </div>
          
            <button type="submit" className="btn btn-primary">Add</button>
          </form>
  )
}

export default AddServiceForm