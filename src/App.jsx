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
import Carousel from "./components/Carousel";
import CarouselM from "./components/CarouselM";

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
        <Carousel/>
        <CarouselM/>
        <Section3/>
        <Footer />
        <Footer2/>

      </BrowserRouter>
    </div>
  );
}

export default App;
