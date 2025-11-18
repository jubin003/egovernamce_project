import React from "react";
import ContactForm from "../components/ui/ContactForm";
import ContactDetails from "../components/ui/ContactDetailCard";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#F6F7F9] flex flex-col">

      <div className="container mx-auto px-6 py-12 flex-1">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-[#0A2A5A]">Contact Us</h1>
        <p className="text-[#3a4a60] mt-2 mb-10 text-lg">
          Get in touch with us for any inquiries or feedback
        </p>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-10">
          <ContactForm />
          <ContactDetails />
        </div>

      </div>

    </div>
  );
};

export default Contact;
