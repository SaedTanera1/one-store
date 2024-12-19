import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./componets/Home/Home";
import Login from "./componets/Login";
import Register from "./componets/Register";
import Header1 from "./componets/Home/Header1";
import Header2 from "./componets/Home/Header2";
import Header3 from "./componets/Home/Header3";
import Footer from "./componets/Home/Footer";
import ProductPage from "./componets/CardHome/ProductPage";
import Hero from "./componets/Hero/Hero";





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
                <ProductPage />
                <Footer />
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
