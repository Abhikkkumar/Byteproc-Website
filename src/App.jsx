import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import HeaderMob from "./components/HeaderMob";
import Sidebar from "./components/Sidebar";

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
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
