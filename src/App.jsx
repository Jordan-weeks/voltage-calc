import InputParameters from "./pages/voltage-calculator/components/InputParameters";
import Output from "./pages/voltage-calculator/components/Output";
import { useRef, useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home";
import VoltageCalculator from "./pages/voltage-calculator";
import Header from "./components/header/Header";
import { useEffect } from "react";
import About from "./pages/about";
import Tables from "./pages/tables";
import PhaseColors from "./pages/phase_colors";
function App() {

  const [navOpen, setNavOpen] = useState(false)

  let navRef = useRef()
  useEffect(() =>{
    document.addEventListener("mousedown", (event) =>{
      if (!navRef.current.contains(event.target)){
        setNavOpen(false)
      }
      
    })
  })
    

  return (
    
  <BrowserRouter>
    <Header navOpen={navOpen} setNavOpen={setNavOpen} navRef={navRef}/>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path= "/voltage-calculator" element={<VoltageCalculator/>} />
      <Route path="/tables/*" element={<Tables/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/phase-colors" element={<PhaseColors/>} />
    </Routes>
  </BrowserRouter>



    
  );
}

export default App;
