import React from "react";
import Button from "./Button";

const ContactForm = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <h2 className="text-2xl font-semibold text-[#0A2A5A]">
        Send us a message
      </h2>
      <p className="text-[#3a4a60] mt-1">
        We’ll respond to your inquiry as soon as possible
      </p>

      <form className="mt-6 space-y-5">

        {/* Name */}
        <div>
          <label className="block text-[#0A2A5A] font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Your full name"
            className="w-full border border-gray-300 rounded-lg p-3 bg-[#F9FAFB] focus:outline-none focus:border-red-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-[#0A2A5A] font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="your.email@example.com"
            className="w-full border border-gray-300 rounded-lg p-3 bg-[#F9FAFB] focus:outline-none focus:border-red-500"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-[#0A2A5A] font-medium mb-1">
            Subject
          </label>
          <input
            type="text"
            placeholder="What is this regarding?"
            className="w-full border border-gray-300 rounded-lg p-3 bg-[#F9FAFB] focus:outline-none focus:border-red-500"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-[#0A2A5A] font-medium mb-1">
            Message
          </label>
          <textarea
            rows="5"
            placeholder="Your message..."
            className="w-full border border-gray-300 rounded-lg p-3 bg-[#F9FAFB] focus:outline-none focus:border-red-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <Button label="Send Message"/>
      </form>
    </div>
  );
};

export default ContactForm;
