import React from 'react'
import '../styles/InputParameters.css'
import {FaBolt} from 'react-icons/fa'




function InputParameters( {phase, setPhase, size, setSize, volts, setVolts, amps, setAmps, length, setLength, handleSubmit}) {
    const voltageDropCalc = (e) =>{
        e.preventDefault()
        console.log("check")

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
    <select name="" id="size" onChange={(e) => setSize(e.target.value)}>
        <option value="14">14 AWG</option>
        <option value="12">12 AWG</option>
        <option value="10">10 AWG</option>
        <option value="8">8 AWG</option>
        <option value="6">6 AWG</option>
        <option value="4">4 AWG</option>
        <option value="3">3 AWG</option>
        <option value="2">2 AWG</option>
        <option value="1">1 AWG</option>
        <option value="1/0">1/0 AWG</option>
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