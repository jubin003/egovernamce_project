import React, { useState } from "react";
import { FiChevronDown, FiCheck } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

function DepartmentDropdown({sendDepart}) {
  const options = ["All Department","Inland Revenue Department","Department of Customs","Treasury Division"];

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select Department");

  return (
    <div className="relative w-auto">
      {/* Selected Box */}
      <button
      type="button"
        onClick={() => setOpen(!open)}
        className="w-full bg-white px-4 py-2 rounded-lg shadow flex justify-between items-center"
      >
        {selected}
        <FiChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
          size={18}
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute mt-2 left-0 w-full bg-white rounded-lg shadow-lg py-2 z-999 border"
          >
            {options.map((dep,index) => (
              <div
                key={index}
                onClick={() => {
                  setSelected(dep);
                  setOpen(false);
                  sendDepart(dep)
                }}
                className={`px-4 py-2 cursor-pointer flex items-center gap-2 
                   hover:bg-[#DC143C] hover:text-white rounded-md transition-all
                `}
              >
                {selected === dep && <FiCheck size={16} />}
                {dep}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DepartmentDropdown;
