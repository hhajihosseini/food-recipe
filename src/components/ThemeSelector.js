import React from 'react';
import './ThemeSelector.css';  // Import the CSS file here
import useTheme from '../hooks/useTheme'; // Make sure this path is correct
import sun from '../assets/sun.svg'

const themeColors = ['#ff6b6b', '#869a14', '#21a7c5', '#2be58e', '#feca57'];

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme(); // Custom hook to handle color change

  const changeToggle = () =>{         
        changeMode(mode === 'dark' ? 'light' : 'dark')
  }

console.log(mode)

  return (

    
    <div className="theme-selector">
        <div className="mode-toggle">
          <img 
              src={sun}
              alt="Toggle dark/light mode"
              onClick={changeToggle}
              style={{filter : mode === 'dark' ? 'invert(100%)': 'invert(20%)'}}
           /> 
    </div>

      <div className="theme-buttons">
        {themeColors.map(color => (
          <div 
            key={color} 
            onClick={() => changeColor(color)} 
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}