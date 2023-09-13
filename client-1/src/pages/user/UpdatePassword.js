import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import Toast from 'react-hot-toast';

const UpdatePassword = () => {

    const [oldpassword,setOldPassword] = useState("");
    const [newpassword,setNewPassword] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://127.0.0.1:8080/api/v1/auth/update-password`,{email,oldpassword,newpassword});
            if(res.data.success){
              Toast.success(res.data.message)
              navigate('/dashboard')
            }
            else{
              Toast.error(res.data.message)
            }
          } catch (error) {
            console.log(error)
          }
    }
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <UserMenu/>
          </div>
          <div className="col-md-10">
            <form onSubmit={handelSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input 
                    type="email" 
                    className="form-control"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}   
                    placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>old password</label>
                    <input 
                    type="password" 
                    class="form-control" 
                    value={oldpassword}
                    onChange={(e)=>setOldPassword(e.target.value)}  
                    placeholder="Old Password" />
                </div>
                <div className="form-group">
                    <label>new password</label>
                    <input 
                    type="password" 
                    class="form-control" 
                    value={newpassword}
                    onChange={(e)=>setNewPassword(e.target.value)}  
                    placeholder="New Password" />
                </div>
                <button type="submit" className="btn btn-primary">update</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>

  )
}

export default UpdatePassword