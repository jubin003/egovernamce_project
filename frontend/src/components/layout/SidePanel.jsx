import React from 'react'
import { FiBarChart2, FiBell, FiGrid } from "react-icons/fi";
import { IoMegaphoneOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function SidePanel() {

  const menu = [
    { icon: <FiGrid size={20} />, label: "Dashboard", path: "/admin/dashboard" },
    { icon: <FiBell size={20} />, label: "Manage Notices", path: "/admin/manage-notices" },
    { icon: <IoMegaphoneOutline size={20} />, label: "Manage Press Releases", path: "/admin/manage-press-releases" },
    { icon: <FiBarChart2 size={20} />, label: "Manage Reports", path: "/admin/manage-reports-publishment" },
  ];

  return (
    <div className='px-4 py-4 w-[30%] flex flex-col space-y-5 bg-white border border-[#d0d0d0] sticky top-0 left-0 h-[100vh]'>
      <div className="border-b border-[#d0d0d0] mb-4 pb-4">
        <h2 className="font-bold text-[#003893] text-[1.5rem]">Admin Panel</h2>
        <p className="text-[#2664c9]">Ministry of Finance Portal</p>
      </div>

      {menu.map((m, index) => (
        <NavLink
          key={index}
          to={m.path}
          className={({ isActive }) =>
            `flex items-center space-x-2  px-2 py-2 rounded-sm font-bold
            ${isActive ? "bg-[#003893] text-white" : " text-[#003893] hover:bg-[#003893] hover:text-white"}`
          }
          // onClick={()=>{}}}
        >
          <div>{m.icon}</div>
          <div>{m.label}</div>
        </NavLink>
      ))}
    </div>
  );
}

export default SidePanel;
