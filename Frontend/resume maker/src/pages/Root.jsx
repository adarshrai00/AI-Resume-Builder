import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
function Root()
{
    return(
    <div>
        <div>
            <Navbar/>
            <Outlet/>
        </div>
        
    </div>)
}

export default Root;