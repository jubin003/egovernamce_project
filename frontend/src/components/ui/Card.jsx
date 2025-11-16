import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { PiBuildingOffice } from "react-icons/pi";
import { FiArrowRight } from "react-icons/fi";

function NoticeCard({title, category, department, description}) {
  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-[#f2f2f2]">
      
      {/* Top Section: Department + Date + Badge */}
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-semibold text-[#002054]">
          {title}
        </h2>

        <span className="text-[#003893] bg-[#eaf1ff] px-4 py-1 rounded-full text-sm font-medium">
          {category}
        </span>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-6 text-[#002054] mt-3">
        <div className="flex items-center gap-2 text-sm">
          <PiBuildingOffice size={18} />
          <span>{department}</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <AiOutlineCalendar size={18} />
          <span>2025-01-15</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-[#003893] mt-4 leading-relaxed">
        {description}
      </p>

      {/* Read More */}
      <button className="flex items-center gap-2 mt-5 text-[#003893] font-medium hover:underline">
        Read More <FiArrowRight size={16} />
      </button>
    </div>
  );
}

export default NoticeCard;
