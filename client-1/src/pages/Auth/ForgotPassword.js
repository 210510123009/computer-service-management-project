import React ,{ useState } from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import Toast from 'react-hot-toast';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  
  const navigate = useNavigate();

  const handelSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,{email, newpassword, answer});
      if (res.data.success) {
        Toast.success(res.data.message);
        
        navigate("/login");
      } else{
        Toast.error(res.message.error) 
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Layout>
    <div className="container">
    <div className="container">
      <h1 className='text-center'>FORGOT PASSWORD</h1>
    <form onSubmit={handelSubmit}>
  <div className="form-group mb-3">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input 
    type="email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}  
    className="form-control" 
    id="exampleInputEmail1" 
    placeholder="Enter email"
    required/>
  </div>
  <div className="form-group mb-3">
    <label htmlFor="exampleInputText">What Is Your Fvourite Sport ?</label>
    <input 
    type="text"
    value={answer}
    onChange={(e)=>setAnswer(e.target.value)}  
    className="form-control" 
    id="exampleInputText" 
    placeholder="Enter Your Answer"
    required/>
  </div>
  <div className="form-group mb-3">
    <label htmlFor="exampleInputPassword1">New Password</label>
    <input 
    type="password" 
    value={newpassword}
    onChange={(e)=>setNewPassword(e.target.value)} 
    className="form-control" 
    placeholder="Enter New Password"
    required/>
  </div>
  <button type="submit" className="btn btn-primary">Reset</button>
</form>
    </div>
    </div>
  </Layout>
  )
}

export default ForgotPassword;