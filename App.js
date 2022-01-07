import { useState } from "react";

import "./App.css";

// dark mode starts
import { BiMoon, BiSun } from "react-icons/bi";
const parent = document.body;

let darkMode = false;
if (localStorage.getItem("theme") === "dark-mode") darkMode = true;

if (darkMode) {
  parent.classList.add("dark-mode");
}
// dark mode ends

function App() {
  const [isDarkMode, setIsDarkMode] = useState(darkMode);

  const darkModeHandler = () => {
    parent.classList.toggle("dark-mode");
    if (parent.classList.contains("dark-mode"))
      localStorage.setItem("theme", "dark-mode");
    else localStorage.removeItem("theme");
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <div>
      {/* heading */}
      <h1 className="dick-size-1">My Fav Stars</h1>

      {/* dick list */}
      <ul className="dicks">
        <li className="dickli-1">Jeremy Renner</li>
        <li className="dickli-2">Johny Sins</li>
      </ul>

      {/* dark mode switch */}
      <button className="dark-mode-btn" onClick={darkModeHandler}>
        {isDarkMode && <BiSun />}
        {!isDarkMode && <BiMoon />}
      </button>
    </div>
  );
}

export default App;
