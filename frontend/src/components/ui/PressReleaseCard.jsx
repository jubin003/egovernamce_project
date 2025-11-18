import React from 'react'
import { AiOutlineInfoCircle } from "react-icons/ai";
function PressReleaseCard({ title, category, department, description }) {
  return (
    <div className="w-full max-w-4xl bg-white rounded-2xl shadow-sm border border-gray-200 p-5 flex gap-4">
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 text-2xl">
        <AiOutlineInfoCircle />
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold text-gray-900">
          {title}
        </h2>

        <p className="text-sm text-gray-600 mt-1">2025-01-10</p>

        <p className="text-gray-700 mt-3">
          {description}
        </p>
      </div>
    </div>
  )
}

export default PressReleaseCard
