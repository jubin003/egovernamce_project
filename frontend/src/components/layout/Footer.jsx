import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='bottom-0 text-[#003893] mt-[60px] bg-white flex items-center justify-between px-4 py-5 hover:text-[#2e5799]'>
      <div className="left">2025 Government of Nepal. All rights reserved.</div>
      <div className="right flex items-center justify-between w-[20%]">
        <NavLink to="/Privacy-Policy">Privacy Policy</NavLink>
        <NavLink to="/Accessibility">Accessibility</NavLink>
        <NavLink to="/Feedback">Feedback</NavLink>
      </div>
    </div>
  )
}

export default Footer
