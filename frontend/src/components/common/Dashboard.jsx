import React from 'react'

function Dashboard() {

  const fetchDashboardData = async ()=>{
    const res = await fetch("http://localhost:5001/api/press")
  }

  return (
    <div>
      
    </div>
  )
}

export default Dashboard
