import React from "react";

import AboutCard from "../components/ui/AboutCard";

import { TbTargetArrow } from "react-icons/tb";
import { FaBolt } from "react-icons/fa6";
import { AiOutlineSafety } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi2";

const About = () => {
  const features = [
    {
      icon: TbTargetArrow,
      title: "Our Mission",
      description:
        "To deliver transparent and instant communication between government and citizens, ensuring everyone stays informed about important updates.",
    },
    {
      icon: FaBolt,
      title: "Instant Updates",
      description:
        "Real-time notifications about government notices, emergency alerts, and important announcements directly to citizens.",
    },
    {
      icon: AiOutlineSafety,
      title: "Verified Information",
      description:
        "All notices and alerts are verified by respective government departments before being published to ensure accuracy.",
    },
    {
      icon: HiOutlineUsers,
      title: "Citizen-Centric",
      description:
        "Designed with citizens in mind, providing easy access to government information through a simple and intuitive interface.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">

      <div className="container mx-auto px-6 py-16 flex-1">
        
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-[#0A2A5A] mb-6">
          About E-Governance Broadcast Portal
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-[#0A2A5A] max-w-4xl leading-relaxed mb-16">
          The E-Governance Broadcast Portal is a centralized platform for 
          disseminating government information, notices, and emergency alerts 
          to citizens across Nepal.
        </p>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {features.map((item, i) => (
            <AboutCard
              key={i}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>

    </div>
  );
};

export default About;
