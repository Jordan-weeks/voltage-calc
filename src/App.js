import InputParameters from "./components/InputParameters";
import Output from "./components/Output";
import { useState } from "react";

function App() {

  const [phase, setPhase] = useState('')
  const [size, setSize] = useState('')
  const [volts, setVolts] = useState('')
  const [amps, setAmps] = useState('')
  const [length, setLength] = useState('')
  const [voltageDropPercent, setVoltageDropPercent] = useState('')
  const [minSize, setMinSize] = useState('')
  const [maxDistance, setMaxDistance] = useState('')
    

  return (
    <div>
    <InputParameters phase = {phase} setPhase= {setPhase} size={size} setSize={setSize} volts={volts} setVolts={setVolts} amps={amps} setAmps={setAmps} length={length} setLength={setLength}/>
    <Output phase={phase} size={size} volts={volts} amps={amps} length={length} />
    </div>
  );
}

export default App;
