import * as React from "react";
import ToggleButton from "./components/ToggleButton";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const App: React.FC = () => {
  const theme = useTheme();

  const defaultStyle: React.CSSProperties = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.dark ? "#1A202C" : "#EDF2F7",
    color: theme.dark ? "#E2E8F0" : "#4A5568",
  };

  return (
    <main style={defaultStyle}>
      {/* toggler component  */}
      <ToggleButton />
      {theme.dark ? <h1>It`s a dark theme</h1> : <h1>it`s a light theme</h1>}
    </main>
  );
};

export default App;
