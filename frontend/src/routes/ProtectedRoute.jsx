import React, { Children } from 'react'
import {Navigate} from "react-router-dom"

function ProtectedRoute() {
    const isLoggegIn = localStorage.getItem("adminToken");
    if(!isLoggegIn){
        return <Navigate to="/admin/login" replace />
    }
    return children;
}

export default ProtectedRoute
