import React, { useEffect, useState } from 'react'
import { RxSun } from "react-icons/rx";
import { RxMoon } from "react-icons/rx";

const ThemeSwitcher = () => {
   const [theme, setTheme] = useState();

   useEffect(() => {
    if (window.matchMedia("prefer-color-scheme: dark"). mathces){
      setTheme('dark')
    } else {
      setTheme('light')
    }
   }, []);

   useEffect(() => {
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
   }, [theme]);

   const handleThemeSwitcher = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
   }

  return (
    <>
     <div onClick={handleThemeSwitcher}
     className=' text-xl'
     >
      {theme === "dark" ? <RxMoon /> : <RxSun />}
      </div> 
    </>
  )
}

export default ThemeSwitcher;
