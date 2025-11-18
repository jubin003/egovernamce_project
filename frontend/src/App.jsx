import React from 'react'
import Home from "./pages/Home"
import { useEffect } from 'react'
function App() {

  const getNotice = async ()=>{
    // fetch("/api/user")
    // .then(res=> res.json())
    // .then(json=> console.log(json))
    const users = await fetch("http://localhost:5001/api/user");
    const data = await users.json();
    console.log(data)
  }

  useEffect(()=>{
    getNotice()
  },[])
  return (
    <div>
      {/* <Home/>/ */}
      App
    </div>
  )
}

export default App
