import React, { useState, useEffect } from "react";
import * as Fa from 'react-icons/fa'
import './hero.scss'

const Hero = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  // set the theme mode based on the state
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  // toggle the state between light and dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };



  return (
    <main>

      <nav className={isDarkMode ? "dark-mode" : "light-mode"}>
        <h1 className="logo">My App</h1>
        <button className="toggle-btn" onClick={toggleDarkMode}>
          {isDarkMode ? <Fa.FaSun /> : <Fa.FaMoon />}
        </button>
      </nav>
      <header className="header">
        <article className="textbox">
          <h1 className="heading-main">
            Learn English the right way.
          </h1>
          <p className="heading-sub">
            Speak well, spell well, translate well. Enhance your diction in English word after word.
          </p>
        </article>
      </header>
    </main>
  )
}

export default Hero