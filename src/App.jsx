import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import HeaderMob from "./components/HeaderMob";
import Sidebar from "./components/Sidebar";
import Footer2 from "./components/Footer2";
import Address from "./components/Address";

function App() {
  const [side, setSide] = useState(false);
  const [address,setAddress] = useState(true);
  return (
    <div>
      <BrowserRouter>
        <Header setAddress={setAddress} />
        <HeaderMob side={side} setSide={setSide} />
        <Sidebar side={side} />
        <Address address={address}/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        
        
        <Footer />
        <Footer2/>

      </BrowserRouter>
    </div>
  );
}

export default App;
