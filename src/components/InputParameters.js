import React from 'react'



function InputParameters({state, dispatch}) {
    const voltageDropCalc = (e) =>{
        e.preventDefault()
        console.log("calculated")}
    return (
    <form onSubmit={voltageDropCalc}>
    <h1>Input Parameters</h1>
    <label htmlFor="phase">Selet phase:</label>
    <select id='phase'>
        <option value="1">Single Phase </option>
        <option value="3">Three Phase</option>
    </select>
    <label htmlFor="size">Wire Sizer:</label>
    <select name="" id="size">
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
    <input type="text" id='volts' />
    <label htmlFor="amps">Current at end of cable</label>
    <input type="text" name="" id="amps" />
    <label htmlFor="length">Total length of cable</label>
    <input type="submit" value="Calculate" />
    </form>
  )
}

export default InputParameters