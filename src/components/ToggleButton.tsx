import * as React from "react";
import { useTheme } from "../context/ThemeContext";
import "./ToggleButton.css";

const ToggleButton: React.FC = () => {
  const theme = useTheme();
  return (
    <div>
      <label className="switch">
        <input type="checkbox" onChange={theme.toggleTheme} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleButton;
