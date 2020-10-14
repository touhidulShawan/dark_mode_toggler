import * as React from "react";
import { useState, useContext } from "react";

interface ContextProps {
  dark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ContextProps>({
  dark: false,
  toggleTheme: function toggleTheme(): void {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
  const [dark, setDark] = useState<boolean>(false);

  const toggleTheme = () => {
    setDark((prevState: boolean) => !prevState);
  };
  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
