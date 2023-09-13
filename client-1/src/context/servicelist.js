import {useEffect, useState, useContext, createContext } from "react";
import axios from "axios";

const ServiceContext = createContext();

const ServiceProvider = (props) => {

    const [service, setService] = useState({
        services:null,
    });


    // useEffect(()=>{
    //     const data = localStorage.getItem('service');
    //     if(data){
    //         const parseData = JSON.parse(data);
    //         setAuth({
    //             ...auth,
    //             services:parseData.service,
    //         })
    //     }
    //     //eslint-disable-next-line
    // },[]);
    return(
        <AuthContext.Provider value={[service, setService]}>
            {props.children}
        </AuthContext.Provider>
    )
}
