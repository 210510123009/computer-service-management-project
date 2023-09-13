import {useEffect, useState, useContext, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();


const AuthProvider = (props) => {
    const [auth, setAuth] = useState({
        user:null,
        token:""
    });


    useEffect(()=>{
        const data = localStorage.getItem('auth');
        if(data){
            const parseData = JSON.parse(data);
            setAuth({
                ...auth,
                user:parseData.user,
                token:parseData.token
            })
        }
        //eslint-disable-next-line
    },[]);
    return(
        <AuthContext.Provider value={[auth, setAuth]}>
            {props.children}
        </AuthContext.Provider>
    )
}

// custom hook

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };