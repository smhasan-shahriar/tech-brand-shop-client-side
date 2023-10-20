import React, { useEffect } from "react";
import { useState } from "react";

const ThemeChanger = () => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
      if (!isDark) {
        document.body.setAttribute('data-theme', 'dark');
        setIsDark(!isDark);
      }
      if (isDark) {
        document.body.setAttribute('data-theme', 'light');
        setIsDark(!isDark);
      }
      
    };
    useEffect(() => {
      if (!isDark) {
        document.body.setAttribute('data-theme', 'light');
      }
    }, [isDark]);
    
  
    const buttonClass = isDark
      ? 'bg-black text-white focus:outline-none m-1 rounded p-2 shadow-outline btn capitalize w-24 absolute md:static right-0 top-20'
      : ' text-black m-1 rounded p-2 shadow-outline btn capitalize w-24 absolute md:static right-0 top-20';
  
    const buttonText = !isDark ? 'Turn on Dark Mode' : 'Turn Off Dark Mode';
  
    return (
      <div className="font-bold">
        <button
       
          className={buttonClass}
          onClick={toggleTheme}
        >
          {buttonText}
        </button>
      </div>
    );
  }

export default ThemeChanger;
