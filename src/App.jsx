
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";

import { ThemeContext, themes } from "./Context/ThemeContext";
import ThemeConsumer from "./Context/ThemeConsumer";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(themes.light);

  const handleChangeTheme = () => {
    console.log("Filho disparou a função que troca o tema");
    theme == themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };
  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>

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
