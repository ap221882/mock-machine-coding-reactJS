import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div>
      <button onClick={handleClick}>{theme}</button>
    </div>
  );
};

export default ThemeToggle;
