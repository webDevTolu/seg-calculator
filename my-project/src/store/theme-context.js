import { createContext, useState } from "react";

const ThemeContext = createContext({
  theme: {
    mainBg: "hsl(222, 26%, 31%)",
    toggleBg: "hsl(223, 31%, 20%)",
    screenBg: "hsl(224, 36%, 15%)",
  },
  toggleTheme: () => {},
});

// secondary: {
//   bgColor: "#000",
//   color: "#fff",
// },
// tertiary: {
//   bgColor: "#fff",
//   color: "#000",
// },

export const ThemeContextProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState({
    mainBg: "#3a4764",
    toggleBg: "hsl(223, 31%, 20%)",
    screenBg: "hsl(224, 36%, 15%)",
  });

  const toggleTheme = () => {
    setCurrentTheme({
      mainBg: "hsl(222, 26%, 31%)",
      toggleBg: "hsl(223, 31%, 20%)",
      screenBg: "hsl(224, 36%, 15%)",
    });
  };

  const contextValue = {
    theme: currentTheme,
    toggleTheme: toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
