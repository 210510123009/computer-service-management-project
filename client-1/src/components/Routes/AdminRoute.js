import { useAuth } from "../../context/auth";
import { Outlet, useNavigate } from "react-router-dom";
import Spinner from "../Spinner";

const AdminRoute = () => {

    const [auth,setAuth] = useAuth();
    
    const navigate = useNavigate();
    
    let type = localStorage.getItem("type");
            
        if(type !== 'admin'){
            setAuth({
                ...auth, 
                user:null,
                token:''
              })
              localStorage.removeItem('auth');
              localStorage.removeItem('login');
              localStorage.removeItem('role');
              localStorage.removeItem('type');
            navigate('/login');
        }
    
    return type ? <Outlet/>:<Spinner/>
}

export default AdminRoute