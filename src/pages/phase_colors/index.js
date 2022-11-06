import React, { useState } from 'react'
import {TableContainer, Stack, Typography, Switch, Table, TableHead, TableRow, TableCell, TableBody, TableFooter } from '@mui/material'
import ColorTable from './components/ColorTable'
import './phase-colors.css'


const PhaseColors = () => {
    
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
    <TableContainer className='phase-color-container'>
        <Stack direction="row" spacing={.5} alignItems="center" justifyContent={'center'} mt={2} mx={1}>
            <Typography>120/208v</Typography>
            <Switch  color="default"  checked={conductorColors} onChange={changeConductorColors}></Switch>
            <Typography>277/480V</Typography>
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