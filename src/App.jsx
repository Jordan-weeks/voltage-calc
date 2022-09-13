import InputParameters from "./pages/voltage-calculator/components/InputParameters";
import Output from "./pages/voltage-calculator/components/Output";
import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home";
import VoltageCalculator from "./pages/voltage-calculator";

function App() {

    

  return (
    
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path= "/voltage-calculator" element={<VoltageCalculator/>} />
    </Routes>
  </BrowserRouter>



    
  );
}

export default App;
