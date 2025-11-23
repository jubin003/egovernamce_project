import React from 'react'
import { useState } from 'react'
import SidePanel from './SidePanel'
import { Outlet } from 'react-router-dom'
import AdminNav from './AdminNav'

function AdminLayout() {
  const [pagetitle,setPageTitle] =useState("")
  return (
    <div className='flex justify-between item-center min-h-screen w-screen '>

      
      <SidePanel />
    
      <div className='flex flex-col space-y-4 h-full w-full'>
        <AdminNav />
        <Outlet />
      </div>

    </div>
  )
}

export default AdminLayout
