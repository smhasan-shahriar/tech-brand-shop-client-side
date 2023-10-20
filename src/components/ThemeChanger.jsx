import { useEffect } from "react";
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
      ? 'toggle mx-1'
      : ' toggle mx-1';
  
  
    return (
      <div className="font-bold flex items-center mx-5 absolute right-0 top-24 md:relative md:top-0 md:right-4">
        <img className="w-10" src="https://i.ibb.co/rwNJ830/icons8-light-mode-78.png" alt="" />
        <input

          className={buttonClass}
          onClick={toggleTheme}
          type="checkbox"
         
        />
        <img className="w-5" src="https://i.ibb.co/m5DGNYG/dark-mode-6682.png" alt="" />
      </div>
    );
  }

export default ThemeChanger;
