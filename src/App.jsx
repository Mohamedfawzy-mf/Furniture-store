import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./compnent/pages/Header";
import Shop from "./compnent/pages/Shop";
import Home from "./compnent/Home";
import AboutUs from "./compnent/pages/AboutUs";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home" element={<Header />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
