import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.classList.remove('light-mode');
    document.documentElement.classList.remove('dark-mode');

    document.documentElement.classList.add(`${theme}-mode`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('Theme context was used outside provider');
  return context;
};

export { ThemeProvider, useTheme };
