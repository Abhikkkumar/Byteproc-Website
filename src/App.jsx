import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import HeaderMob from "./components/HeaderMob";
import Sidebar from "./components/Sidebar";
import Footer2 from "./components/Footer2";
import Section3 from "./components/Section3";
import About from "./components/About";
import Section4 from "./components/Section4";
import Services from "./components/Services";

function App() {
  const [side, setSide] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <HeaderMob side={side} setSide={setSide} />
        <Sidebar side={side} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <About/>
        <Section3/>
        <Services/>
        <Section4/>
        <Footer />
        <Footer2/>

      </BrowserRouter>
    </div>
  );
}

export default App;
