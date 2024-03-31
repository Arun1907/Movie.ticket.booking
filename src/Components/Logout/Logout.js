import React from "react";
import './Logout.css';
import { Navigate, useNavigate } from "react-router-dom";

const Logout = () =>{
    const navigate = useNavigate();
    return(
        <div className="logout">
            <button onClick={()=>navigate("/")}>Logout</button>
        </div>
    )
}

export default Logout; 