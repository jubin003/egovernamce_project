import React from 'react';
import { AiOutlineInfoCircle } from "react-icons/ai";

function MonthlyReportCard({ title, date }) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center gap-5 bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
        
        {/* Icon */}
        <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-lg bg-blue-100 text-blue-700 text-3xl">
          <AiOutlineInfoCircle />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            {title}
          </h2>
          <p className="text-sm text-gray-500 mt-1 sm:mt-0">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MonthlyReportCard;
