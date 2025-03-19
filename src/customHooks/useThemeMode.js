import { useState, useEffect } from 'react';

const useThemeMode = () => {
  const [themeMode, setThemeMode] = useState('dark');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setThemeMode(localStorage.getItem('themeMode') || 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('themeMode', themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return { themeMode, toggleTheme };
};

export default useThemeMode;
