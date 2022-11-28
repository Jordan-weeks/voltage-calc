import React from 'react'
import '../voltage-calculator.css'
import {FaBolt} from 'react-icons/fa'
import { calculateVdPercent } from './VoltageCalculation'
import { Card, CardContent, FormControl, InputLabel, MenuItem, Select, Input, Button } from '@mui/material'




function InputParameters( {phase, setPhase, size, setSize, volts, setVolts, amps, setAmps, length, setLength, voltageDropPercent, setVoltageDropPercent, setEndOfLineVolts, setIsSubmitted, handleSubmit, setErrorModal}) {
    
    const voltageDropCalc = () =>{
        setVoltageDropPercent(calculateVdPercent(phase, size, volts, amps, length).vdPercent.toFixed(2))
        setEndOfLineVolts(calculateVdPercent(phase, size, volts, amps, length).endOfLineVolts.toFixed(0))
        setIsSubmitted(true)

    }
    const validate = () =>{
        if( phase === '' || size === '' || volts === '' || amps === '' || length === ''){
            setErrorModal(true)
        }
        else voltageDropCalc()
    }
    
    const checkForNumber = (e) =>{
        const result = e.target.value.replace(/\D/g, '');
        return result
    }
    
        
    return (
        <Card 
        sx={{mt:2}}
        elevation={4}>
            <CardContent>
            <FormControl required fullWidth sx={{my:1.5}}>
                <InputLabel>Phase</InputLabel>
                <Select label={"phase"} value = {phase} onChange={(e) =>setPhase(e.target.value)}> 
                    <MenuItem value={"1"}>Single Phase</MenuItem>
                    <MenuItem value={"3"}>Three Phase</MenuItem>
                </Select>
                
            </FormControl>
            <FormControl required fullWidth sx={{my:1.5}}>
            <InputLabel>Wire Size</InputLabel>
                <Select label={'Wire Size'}value={size} onChange={(e) => setSize(e.target.value)}>
                    <MenuItem value="3.14">14 AWG</MenuItem>
                    <MenuItem value="1.98">12 AWG</MenuItem>
                    <MenuItem value="1.24">10 AWG</MenuItem>
                    <MenuItem value=".778">8 AWG</MenuItem>
                    <MenuItem value=".491">6 AWG</MenuItem>
                    <MenuItem value=".308">4 AWG</MenuItem>
                    <MenuItem value=".245">3 AWG</MenuItem>
                    <MenuItem value=".194">2 AWG</MenuItem>
                    <MenuItem value=".154">1 AWG</MenuItem>
                    <MenuItem value=".122">1/0 AWG</MenuItem>
                </Select>
            </FormControl>
            <FormControl required fullWidth sx={{my:1.5}}>
                <InputLabel>Volts</InputLabel>
                <Input label={'Volts'} value={volts} onChange={(e) => setVolts(checkForNumber(e))}></Input>
            </FormControl>
            <FormControl required fullWidth sx={{my:1.5}}>
                <InputLabel>Amps</InputLabel>
                <Input label='Amps' value={amps} onChange={(e) => setAmps(checkForNumber(e))}></Input>
            </FormControl>
            <FormControl required fullWidth sx={{my:1.5}}>
                <InputLabel>Length (in feet)</InputLabel>
                <Input label='Length' value={length} onChange={(e) => setLength(checkForNumber(e))}></Input>
            </FormControl>
            <Button 
            variant={'contained'} 
            color={'secondary'}
            sx={{my:1}}
            onClick={validate}
            >
            <FaBolt/>  Calculate <FaBolt/>
        </Button>
            </CardContent>
        </Card>
    )
}

export default InputParameters