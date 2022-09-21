import React from 'react'
import { calculateVdPercent } from './VoltageCalculation'

function Output(props) {
  // calculateVdPercent(props.phase, props.size, props.volts, props.amps, props.length)
  return (
    <>
    <p>The voltage drop percent is : {props.voltageDropPercent}%</p>
    <p>The voltage at the load will be: {props.endOfLineVolts}</p>
    </>
  )
}

export default Output