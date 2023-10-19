import React from "react";
import { useState } from "react";

const ThemeChanger = () => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
      setIsDark(!isDark);
    };
  
    const buttonClass = isDark
      ? 'bg-black text-white focus:outline-none m-1 rounded p-2 shadow-outline btn capitalize text-lg'
      : 'bg-gradient-to-r from-pink-300 via-pink-300 to-pink-400 text-black m-1 rounded p-2 shadow-outline btn capitalize text-lg';
  
    const buttonText = !isDark ? 'Turn on Dark Mode' : 'Turn Off Dark Mode';
  
    return (
      <div className="font-bold">
        <button
          data-act-class="shadow-outline"
          data-set-theme={!isDark ? 'dark' : ''}
          className={buttonClass}
          onClick={toggleTheme}
        >
          {buttonText}
        </button>
      </div>
    );
  }

export default ThemeChanger;
