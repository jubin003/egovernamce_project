import React from "react";

const AboutCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
      <div className="flex items-start gap-5">
        
        {/* Icon Container */}
        <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>

        {/* Title + Description */}
        <div>
          <h3 className="text-2xl font-semibold text-[#0A2A5A]">{title}</h3>

          <p className="text-[#0A2A5A] mt-2 leading-relaxed">
            {description}
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutCard;
