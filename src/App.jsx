
import "./index.css";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import { ThemeContext, themes } from "./Context/ThemeContext";
import ThemeConsumer from "./Context/ThemeConsumer";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(themes.light);

  const [themeIcon, setThemeIcon] = useState("☀")

  const handleChangeIcon = () => {
    console.log("Filho disparou a função que troca o icone");

    if (theme === themes.light) {
      setThemeIcon("🌙");
    } else {
      setThemeIcon("☀");
    }
    localStorage.setItem("icon", themeIcon)
  };


  const handleChangeTheme = () => {
    console.log("Filho disparou a função que troca o tema");
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
    localStorage.setItem("theme", theme)
    handleChangeIcon();
  };

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme, themeIcon }}>

      <ThemeConsumer>

        <Navbar />
        {/* perguntar pro prof pq o Outlet nao esta aparecendo */}
        {/* <Detail /> */}
        {/* <Home /> */}
        <Outlet />
        <Footer />

      </ThemeConsumer>

    </ThemeContext.Provider>


  )
}

export default App;
