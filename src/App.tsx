import * as React from "react";
import { useState } from "react";
import ToggleButton from "./components/ToggleButton";

interface ContextProps {
  dark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ContextProps>({
  dark: false,
  toggleTheme: function toggleTheme(): void {},
});

const App: React.FC = () => {
  const [dark, setDark] = useState<boolean>(false);

  const toggleTheme = () => {
    setDark((prevState: boolean) => !prevState);
  };

  const theme: React.CSSProperties = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: dark ? "#1A202C" : "#EDF2F7",
    color: dark ? "#E2E8F0" : "#4A5568",
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <main style={theme}>
        {/* toggler component  */}
        <ToggleButton />
        {dark ? <h1>It`s a dark theme</h1> : <h1>it`s a light theme</h1>}
      </main>
    </ThemeContext.Provider>
  );
};

export default App;
