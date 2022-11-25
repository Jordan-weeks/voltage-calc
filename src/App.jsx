import { useRef, useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home";
import VoltageCalculator from "./pages/voltage-calculator";
import Header from "./components/header/Header";
import { useEffect } from "react";
import About from "./pages/about";
import Tables from "./pages/tables";
import PhaseColors from "./pages/phase_colors";
import ConduitFill from "./pages/conduit_fill";
import {ThemeProvider, createTheme, Paper} from "@mui/material"

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        light: '#a98274',
        main: '#795548',
        dark: '#4b2c20',
        contrastText: '#ffffff',
      },
      secondary: {
        light: '#62727b',
        main: '#37474f',
        dark: '#102027',
        contrastText: '#ffffff'
      }
    }
    
  

  });
  

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
   <ThemeProvider theme={theme}>
    <Paper sx={{ minHeight: '100vh' }}>
    <BrowserRouter>
      <Header navOpen={navOpen} setNavOpen={setNavOpen} navRef={navRef}/>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path= "/voltage-calculator" element={<VoltageCalculator/>} />
        <Route path="/tables/*" element={<Tables/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/phase-colors" element={<PhaseColors/>} />
        <Route path="/conduit-fill" element={<ConduitFill/>} />
      </Routes>
    </BrowserRouter>
    </Paper>
  </ThemeProvider>



    
  );
}

export default App;
