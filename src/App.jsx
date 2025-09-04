import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./compnent/NavBar";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<NavBar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
