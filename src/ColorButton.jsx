import React from "react";

const ColorButton = ({ color, label, onClick }) => {
  return (
    <button
      className="color-button"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ColorButton;
