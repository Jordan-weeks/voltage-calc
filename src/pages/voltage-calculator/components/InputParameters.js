import React from 'react'
import '../voltage-calculator.css'
import {FaBolt} from 'react-icons/fa'
import { calculateVdPercent } from './VoltageCalculation'




function InputParameters( {phase, setPhase, size, setSize, volts, setVolts, amps, setAmps, length, setLength, voltageDropPercent, setVoltageDropPercent, setEndOfLineVolts, setIsSubmitted, handleSubmit}) {
    
    const voltageDropCalc = (e) =>{
        e.preventDefault()
        console.log(calculateVdPercent(phase, size, volts, amps, length))
        setVoltageDropPercent(calculateVdPercent(phase, size, volts, amps, length).vdPercent.toFixed(2))
        setEndOfLineVolts(calculateVdPercent(phase, size, volts, amps, length).endOfLineVolts.toFixed(0))
        setIsSubmitted(true)

    }
    
    const checkForNumber = (e) =>{
        const result = e.target.value.replace(/\D/g, '');
        return result
    }
    
        
    return (
    <div className='container'>
    <form onSubmit={voltageDropCalc}>
    <h1>Input Parameters</h1>
    <label htmlFor="phase">Selet phase:</label>
    <select id='phase' value={phase} onChange={(e) => setPhase(e.target.value)}>
        <option value="1">Single Phase </option>
        <option value="3">Three Phase</option>
    </select>
    <label htmlFor="size">Wire Sizer:</label>
    <select name="" id="size" value={size} onChange={(e) => setSize(e.target.value)}>
        <option value="3.14">14 AWG</option>
        <option value="1.98">12 AWG</option>
        <option value="1.24">10 AWG</option>
        <option value=".778">8 AWG</option>
        <option value=".491">6 AWG</option>
        <option value=".308">4 AWG</option>
        <option value=".245">3 AWG</option>
        <option value=".194">2 AWG</option>
        <option value=".154">1 AWG</option>
        <option value=".122">1/0 AWG</option>
    </select>
    <label htmlFor="volts">Volts</label>
    <input type="text" id='volts' value={volts} onChange={(e) => setVolts(checkForNumber(e))} />
    <label htmlFor="amps">Current at end of cable</label>
    <input type="text" name="" id="amps" value={amps} onChange={(e) => setAmps(checkForNumber(e))} />
    <label htmlFor="length">Total length of cable</label>
    <input type="text" name="" id="length" value={length} onChange={(e) => setLength(checkForNumber(e))} />
    <button><FaBolt/> Calculate <FaBolt/></button>
    </form>
    </div>
  )
}

export default InputParameters