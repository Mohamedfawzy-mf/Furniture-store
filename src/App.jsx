import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./compnent/pages/Header";
import Shop from "./compnent/pages/Shop";
import Home from "./compnent/Home";
import AboutUs from "./compnent/pages/AboutUs";
import Services from "./compnent/pages/Services";
import BlogProduct from "./compnent/pages/BlogProduct";
import ContactUs from "./compnent/pages/ContactUs";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home" element={<Header />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blog" element={<BlogProduct/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
