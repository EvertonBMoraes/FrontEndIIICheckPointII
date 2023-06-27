
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";

function App() {
  return (
    <div>
      <Navbar />
      {/* perguntar pro prof pq o Outlet nao esta aparecendo */}
      {/* <Detail /> */}
      <Home />
      <Outlet />
      <Footer />
    </div>
    // <>
    //   {/* //Na linha seguinte deverá ser feito um teste se a aplicação
    //     // está em dark mode e deverá utilizar a classe dark ou light */}
    //   <div className={`app light}`}>
    //     <Navbar />
    //     <Outlet />
    //     <Footer />
    //   </div>
    // </>
  )
}

export default App;
