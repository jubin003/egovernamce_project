import React from 'react';
import { FaBuilding } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Navbar() {
  const navItems = [
    { label: "Home", to: "/Home" },
    { label: "Notices", to: "/Notices" },
    { label: "Alerts", to: "/Alerts" },
    { label: "Departments", to: "/Departments" },
    { label: "Contact", to: "/Contact" },
    { label: "About Us", to: "/About-Us" }
  ];

  return (
    <div className='sticky top-0 bg-white z-50 flex justify-between items-center px-[1rem] py-[1.2rem] shadow-md'>
      {/* Logo */}
      <NavLink to="/Home">
        <div className="logo flex items-center gap-2 font-semibold text-[#003893]">
          <FaBuilding size={24} />
          <div>E-governance Broadcast Portal</div>
        </div>
      </NavLink>

      {/* Navigation */}
      <div className="nav-options flex gap-3 font-semibold">
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              isActive
                ? "text-[#DC143C] font-bold border-b-2 border-[#DC143C] pb-1"
                : "text-[#003893] hover:text-[#DC143C] transition-colors"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Language toggle */}
      <div className="toggle-lang font-semibold text-[#003893] cursor-pointer">
        English
      </div>
    </div>
  );
}

export default Navbar;
