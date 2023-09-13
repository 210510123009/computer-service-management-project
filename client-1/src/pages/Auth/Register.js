import React ,{ useState } from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import Toast from 'react-hot-toast';

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  //form function
  const handelSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password,phone});
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
    <form onSubmit={handelSubmit}>
 <div className="form-group mb-3">
    <label htmlFor="exampleInputEmail1">Enter Name</label>
    <input 
    type="text" 
    value={name}
    onChange={(e)=>setName(e.target.value)} 
    className="form-control" 
    placeholder="Enter name"
    required/>
  </div>
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
    <label htmlFor="exampleInputPassword1">Password</label>
    <input 
    type="password" 
    value={password}
    onChange={(e)=>setPassword(e.target.value)} 
    className="form-control" 
    placeholder="Password"
    required/>
  </div>
  <div className="form-group mb-3">
    <label htmlFor="exampleInputPassword1">phone</label>
    <input 
    type="text"
    value={phone}
    onChange={(e)=>setPhone(e.target.value)} 
    className="form-control" 
    placeholder="phone"
    required/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
</Layout>

  );
};

export default Register