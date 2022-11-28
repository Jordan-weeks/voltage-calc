import { Container, Typography } from '@mui/material'
import React from 'react'

function Output(props) {
  // calculateVdPercent(props.phase, props.size, props.volts, props.amps, props.length)
  return (
    <Container>
    <Typography variant = {'h4'} sx={{my:1}}>The voltage drop percent is : {props.voltageDropPercent}%</Typography>
    <Typography variant = {'h4'}>The voltage at the load will be: {props.endOfLineVolts} volts</Typography>
    </Container>
  )
}

export default Output