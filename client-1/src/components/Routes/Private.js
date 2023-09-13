import { useAuth } from "../../context/auth";
import { Outlet, useNavigate } from "react-router-dom";
import Spinner from "../Spinner";

const PrivateRoute = () => {
    const [auth,setAuth] = useAuth();

    const navigate = useNavigate();

    let login = localStorage.getItem("login");
        
        if(!login){
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

     return login ? <Outlet/>:<Spinner/>
}

export default PrivateRoute;