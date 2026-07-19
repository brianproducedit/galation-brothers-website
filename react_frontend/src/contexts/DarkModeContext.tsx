import React, { useEffect, useState } from 'react';
import { DarkModeContext } from './DarkModeContextTypes';

const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first for user preference
    const saved = localStorage.getItem('theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    // Default to light mode instead of system preference
    return false;
  });

  // Apply theme changes and initialize on mount
  useEffect(() => {
    console.log('Applying theme - isDark:', isDark);
    // Always save the current state to localStorage (matching HTML version)
    localStorage.theme = isDark ? 'dark' : 'light';
    // Apply the class to document element
    if (isDark) {
      document.documentElement.classList.add('dark');
      console.log('Added dark class');
    } else {
      document.documentElement.classList.remove('dark');
      console.log('Removed dark class');
    }
    console.log('Current classes:', document.documentElement.classList.toString());
  }, [isDark]);

  const toggleDarkMode = () => {
    console.log('toggleDarkMode called, current isDark:', isDark);
    setIsDark((prev: boolean) => {
      const newValue = !prev;
      console.log('Setting isDark to:', newValue);
      return newValue;
    });
  };

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;