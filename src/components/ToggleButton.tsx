import * as React from "react";
import { useContext } from "react";
import { ThemeContext } from "../App";
import "./ToggleButton.css";

const ToggleButton: React.FC = () => {
  const theme = useContext(ThemeContext);
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
