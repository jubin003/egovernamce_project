import React from 'react'
import { FaBuilding } from "react-icons/fa";


function LatestBroadcast({ title, category, description, date }) {
    return (
        <div className="bg-white rounded-lg p-6  hover:shadow transition-shadow">
            {/* Icon and Date */}
            <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-blue-100 rounded-md">
                    <FaBuilding className="text-[#003893]" size={20} />
                </div>
                <span className="text-sm text-gray-500">{date}</span>
            </div>

            {/* Title */}
            <h2 className="font-semibold text-lg mb-1">{title}</h2>

            {/* Category */}
            <p className="text-[#003893] text-sm mb-3">{category}</p>

            {/* Description */}
            <p className="text-[#003893] text-sm mb-4 w-[80%]">{description}</p>

            {/* Read More */}
            <a href="#" className="text-[#003893] font-medium flex items-center text-sm">
                Read More <span className="ml-1">→</span>
            </a>
        </div>
    )
}

export default LatestBroadcast







