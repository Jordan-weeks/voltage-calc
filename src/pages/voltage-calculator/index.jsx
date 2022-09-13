import React from 'react'
import { useState } from 'react'
import InputParameters from './components/InputParameters'
import Output from './components/Output'





const VoltageCalculator = () => {
    const [phase, setPhase] = useState('')
    const [size, setSize] = useState('')
    const [volts, setVolts] = useState('')
    const [amps, setAmps] = useState('')
    const [length, setLength] = useState('')
    const [voltageDropPercent, setVoltageDropPercent] = useState('')
    const [endOfLineVolts, setEndOfLineVolts] = useState('')
    const [minSize, setMinSize] = useState('')
    const [maxDistance, setMaxDistance] = useState('')


  return (
    <div>
    <InputParameters phase = {phase}
     setPhase= {setPhase}
     size={size}
     setSize={setSize}
     volts={volts}
     setVolts={setVolts}
     amps={amps}
     setAmps={setAmps}
     length={length}
     setLength={setLength}
     voltageDropPercent= {voltageDropPercent}
     setVoltageDropPercent = {setVoltageDropPercent}
     setEndOfLineVolts ={setEndOfLineVolts}

     />
    <Output
    phase={phase}
    size={size}
    volts={volts}
    amps={amps}
    length={length}
    voltageDropPercent={voltageDropPercent}
    endOfLineVolts = {endOfLineVolts}
    />
    </div>
  )
}

export default VoltageCalculator