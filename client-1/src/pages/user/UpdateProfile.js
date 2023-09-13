import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import Toast from 'react-hot-toast';
import { useAuth } from '../../context/auth'

const UpdateProfile = () => {

  const [email,setEmail] = useState("")
  const [name,setName] = useState("")
  const [phone,setPhone] = useState("")
  const [password,setPassword] = useState("")

  const navigate = useNavigate("")

  const handelSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/update-profile`,{email, name, phone, password});
      if (res.data.success) {
        Toast.success(res.data.message);
        navigate("/dashboard");
      } else{
        Toast.error(res.message.error)
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
            <div className="form-group mb-3">
              <label htmlFor="exampleInputEmail1">Enter Email for verify</label>
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
              <label htmlFor="exampleInputPassword1">phone</label>
              <input 
              type="text"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)} 
              className="form-control" 
              placeholder="phone"
              required/>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="exampleInputPassword1">Enter Password to Verify</label>
              <input 
              type="password" 
              value={password}
              onChange={(e)=>setPassword(e.target.value)} 
              className="form-control" 
              placeholder="Enter password to verify"
              required/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
//     <Layout>
//     <div className="container">
//       <div className="row">
//           <div className="col-md-2">
//             <UserMenu/>
//           </div>
//           <div class='col-md-10'>
//             <form onSubmit={handelSubmit}>
//             <div className="form-group mb-3">
//               <label htmlFor="exampleInputEmail1">Enter Email for verify</label>
//               <input 
//               type="email"
//               value={email}
//               onChange={(e)=>setEmail(e.target.value)}  
//               className="form-control" 
//               id="exampleInputEmail1" 
//               placeholder="Enter email"
//               required/>
//             </div>
//             <div className="form-group mb-3">
//               <label htmlFor="exampleInputEmail1">Enter Name</label>
//               <input 
//               type="text" 
//               value={name}
//               onChange={(e)=>setName(e.target.value)} 
//               className="form-control" 
//               placeholder="Enter name"
//               required/>
//             </div>
//             <div className="form-group mb-3">
//               <label htmlFor="exampleInputPassword1">phone</label>
//               <input 
//               type="text"
//               value={phone}
//               onChange={(e)=>setPhone(e.target.value)} 
//               className="form-control" 
//               placeholder="phone"
//               required/>
//             </div>
//             <div className="form-group mb-3">
//               <label htmlFor="exampleInputPassword1">Enter Password to Verify</label>
//               <input 
//               type="password" 
//               value={password}
//               onChange={(e)=>setPassword(e.target.value)} 
//               className="form-control" 
//               placeholder="Enter password to verify"
//               required/>
//             </div>
//             <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//           </div>
//       </div>
//     </div>
// </Layout>
  )
}

export default UpdateProfile