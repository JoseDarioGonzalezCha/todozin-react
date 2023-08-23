import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext(); // Agrega esta línea

export const ThemeProvider = ({ children, theme }) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
