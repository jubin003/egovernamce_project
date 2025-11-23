import React from 'react';

function Button({ label, type = "primary", color, onClick, disabled, formtype }) {
  const baseClasses = "font-bold px-4 py-2 rounded transition-all";

  const typeClasses =
    type === "secondary"
      ? "bg-white text-[#003893] border border-[#e0e0e0] hover:bg-[#003893] hover:text-white"
      : type === "tertiary"
      ? `bg-transparent text-[${color}] hover:underline`
      : "bg-[#DC143C] text-white hover:bg-red-700";

  return (
    <div>
      <button
        type={formtype || "button"}
        onClick={onClick}          // <-- add this
        disabled={disabled}        // <-- add this for disabling
        className={`${baseClasses} ${typeClasses} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
