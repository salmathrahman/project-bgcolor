import React, { useState } from "react";
import ColorButton from "./ColorButton"; 
import "./styles.css";

const App = () => {
  const [colorName, setColorName] = useState(""); 

  const colorOptions = [
    { name: "Ocean Breeze", color: "#7fb3d5" },
    { name: "Sandy Shore", color: "#f5cba7" },
    { name: "Frosty Mint", color: "#82e0aa" },
    { name: "Golden Hour", color: "#f7dc6f" },
  ];

  return (
    <div className="container" style={{ backgroundColor: colorOptions.find(c => c.name === colorName)?.color || "white" }}>
      <h1>Transform Your Zone</h1>
      <h3>Pick Your Perfect Hue: <span>{colorName || "Select a color"}</span></h3>

      <div className="button-container">
        {colorOptions.map((colorOption) => (
          <ColorButton 
            key={colorOption.name} 
            color={colorOption.color} 
            label={colorOption.name}  
            onClick={() => setColorName(colorOption.name)}  
          />
        ))}
      </div>
    </div>
  );
};

export default App;