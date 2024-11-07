import React, { useState, useEffect } from 'react';
import Moon from '@/assets/icons/Moon';
import Sun from '@/assets/icons/Sun';
import './themetoggle.scss';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark-theme' ? 'light' : 'dark-theme';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {theme === 'dark-theme' ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggle;
