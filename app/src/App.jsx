import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Productpage1 from "./pages/Productpage1.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Cart from "./pages/Cart.jsx";
import Buy from "./pages/Buy.jsx";
function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<Productpage1 />} />
          <Route path="/yourcart" element={<Cart />} />
          <Route path="/buynow" element={<Buy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
