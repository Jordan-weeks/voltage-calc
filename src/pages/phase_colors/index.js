import React, { useState } from 'react'
import {TableContainer, Stack, Typography, Switch, Table, TableHead, TableRow, TableCell, TableBody, TableFooter } from '@mui/material'
import ColorTable from './components/ColorTable'


const PhaseColors = () => {
    const aPhase = [1,2,7,8,13,14]
    const bPhase = [3,4,9,10,15,16]
    const cPhase = [5,6,11,12,17,18]
    const allPhases = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    const generateNumbers = () =>{
        for (let i = 1; i<100; i+3){
            aPhase.push(i)
        }
    }
    const [aColor, setAColor] = useState('Black')
    const [bColor, setBColor] = useState('Red')
    const [cColor, setCColor] = useState('Blue')
    const [cFont, setCFont] = useState('White')
    const [conductorColors, setConductorColors] = useState(false)

    const changeConductorColors = () =>{
        if (conductorColors === false){
            setAColor('Brown')
            setBColor('Orange')
            setCColor('Yellow')
            setCFont('black')
            setConductorColors(true)
        }
        if (conductorColors=== true){
        setAColor('Black')
        setBColor('Red')
        setCColor('Blue')
        setCFont('white')
        setConductorColors(false)
        }  
    }
  return (
    <>
    <TableContainer>
    <Stack direction="row" spacing={.5} alignItems="center" justifyContent={'center'} mt={2} mx={1}>
        <Typography>Copper</Typography>
        <Switch  color="default"  checked={conductorColors} onChange={changeConductorColors}></Switch>
        <Typography>Aluminum</Typography>
        
        <Typography>View both</Typography>
      </Stack>
        <ColorTable 
            aColor = {aColor}
            bColor = {bColor}
            cColor = {cColor}
            cFont = {cFont}
            />        
    </TableContainer>


    </>
        
  )
}

export default PhaseColors