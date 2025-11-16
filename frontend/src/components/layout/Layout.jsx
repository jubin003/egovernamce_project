import React from 'react'
import NavBar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <NavBar />
            <Outlet/>
            <Footer />
        </>
    )
}

export default Layout
