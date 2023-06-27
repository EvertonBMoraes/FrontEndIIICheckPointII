import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import App from "./App";

import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Detail from "./Routes/Detail";

import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<App />} >
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>

  // <Navbar />
  // <Home />
  // <Footer />

);
