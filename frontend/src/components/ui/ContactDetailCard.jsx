import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { PiMapPinLight } from "react-icons/pi";

const ContactDetails = () => {
  return (
    <div className="bg-white rounded-xl  shadow-sm p-8">
      <h2 className="text-2xl font-semibold text-[#0A2A5A]">
        Contact Information
      </h2>
      <p className="text-[#3a4a60] mt-1">
        Reach out to us through these channels
      </p>

      <div className="mt-8 space-y-8">

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <HiOutlineMail className="text-blue-700 w-6 h-6" />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#0A2A5A]">Email</h3>
            <p className="text-[#3a4a60]">info@egov.gov.np</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <FiPhone className="text-blue-700 w-6 h-6" />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#0A2A5A]">Phone</h3>
            <p className="text-[#3a4a60]">+977-1-4211211</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <PiMapPinLight className="text-blue-700 w-6 h-6" />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#0A2A5A]">
              Office Address
            </h3>
            <p className="text-[#3a4a60]">
              Singh Durbar, Kathmandu <br /> Nepal
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactDetails;
