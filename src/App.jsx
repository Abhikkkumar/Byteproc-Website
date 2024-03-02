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
import AboutPage from "./components/AboutPage";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Product from "./components/Product";
import FullTimeRole from "./components/FullTimeRole";
import DigitalMarketing from "./components/DigitalMarketing";
import ApiDev from "./components/ApiDev";
import AppDev from "./components/AppDev";
import WebsiteDevelopment from "./components/WebsiteDevelopment";
import SoftwareDevelopment from "./components/SoftwareDevelopment";

function App() {
  const [side, setSide] = useState(false);
  const [address,setAddress] = useState(false);
  return (
    <div className="app">
      <BrowserRouter>
        <Header setAddress={setAddress} />
        <HeaderMob side={side} setSide={setSide} setAddress={setAddress}/>
        <Sidebar side={side} setSide={setSide} />
        <Address address={address} setAddress={setAddress}/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutPage />}></Route>
          <Route path="/career" element={<Career />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/full-time-role" element={<FullTimeRole />}></Route>
          <Route path="/website-development" element={<WebsiteDevelopment />}></Route>
          <Route path="/software-development" element={<SoftwareDevelopment />}></Route>
          <Route path="/app-development" element={<AppDev />}></Route>
          <Route path="/api-development" element={<ApiDev />}></Route>
          <Route path="/digital-marketing" element={<DigitalMarketing />}></Route>

        </Routes>
        
        
        <Footer />
        <Footer2/>

      </BrowserRouter>
    </div>
  );
}

export default App;
