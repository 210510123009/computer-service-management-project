import React ,{ useState } from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom"
import Toast from 'react-hot-toast';
import { useAuth } from '../../context/auth';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] =useAuth();
  
  const navigate = useNavigate();
  const location = useLocation();

  const handelSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password});
      if (res.data.success) {
        Toast.success(res.data.message);
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token
        });

        localStorage.setItem('auth', JSON.stringify(res.data));
        localStorage.setItem('login',true);
        localStorage.setItem('email', email)
        
        if(res.data.user.role === 0){
          localStorage.setItem('role', 0);
          localStorage.setItem('type', 'user');
          navigate(location.state||"/");
        }
        else if(res.data.user.role === 1){
          localStorage.setItem('role', 1);
          localStorage.setItem('type', 'admin');
          navigate("/admindashboard")
        }
        else{
          localStorage.setItem('role', 2);
          localStorage.setItem('type', 'technician');
          navigate("/techniciandashboard")

        }


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
    <label htmlFor="exampleInputPassword1">Password</label>
    <input 
    type="password" 
    value={password}
    onChange={(e)=>setPassword(e.target.value)} 
    className="form-control" 
    placeholder="Password"
    required/>
  </div>
  <button type="submit" className="btn btn-outline-success">Login</button>
</form>
    </div>
    </div>
  </Layout>

  );
};

export default Login