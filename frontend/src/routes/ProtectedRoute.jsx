import React, { Children } from 'react'
import {Navigate} from "react-router-dom"

function ProtectedRoute() {
    const isLoggedIn = localStorage.getItem("adminToken");
    //!isLoggedIn
    if(!isLoggedIn){
        return <Navigate to="/admin/login" replace />
    }
    return Children;
}

export default ProtectedRoute
