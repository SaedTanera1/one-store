import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
 import {Box , CassBaseline, ThemeProvider} from "@mui/material"
// import {colorModeContext, useMode} from "./Theme"
import Login from "./componets/Login";
import Register from "./componets/Register";
import Header1 from "./componets/Home/Header1";
import Header2 from "./componets/Home/Header2";
import Header3 from "./componets/Home/Header3";
import Footer from "./componets/Home/Footer";
import Hero from "./componets/Hero/Hero";
import Dis from "./componets/Home/Dis";
import ScrollToTop from "./componets/Scroll/ScrollToTop";
import Pay from "./componets/Pay";
import Support from "./componets/Support";






function App() {
  return (

    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <>
                <Header1 />
                <Header2 />
                <Header3 />
                <Hero />
                <Pay/>
                <Support />
                <Dis />
                <Footer />
                <ScrollToTop/>

              </>

            }
            path="/"
          />
          <Route element={<Login />} path="/Login" />
          <Route element={<Register />} path="/Register" />
          <Route element={<Footer />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>

      
  );
}

export default App;




