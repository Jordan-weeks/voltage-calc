import React from 'react'
import { useState } from 'react'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Switch, Stack, Typography, Checkbox } from '@mui/material'


import '../tables.css'
import T310_15_Both from './components/T310_15_Both'
import T310_15_AL from './components/T310_15_AL'
import T310_15_CU from './components/T310_15_CU'

const Table310_15_b_16 = () => {
  // false = copper. true = aluminum
  const [conductorType, setConductorType] = useState(false)
  const [conductorToggleDisable, setConductorToggleDisable] = useState(false)
  const [bothStatus, setBothStatus] = useState(false)

  const changeConductorType = () =>{
    setConductorType(!conductorType)
  }  
  
  const viewBoth = () =>{
    setBothStatus(!bothStatus)
    setConductorToggleDisable(!conductorToggleDisable)
  }
  
  const rowData = () =>{
    if (bothStatus === true){
       return <T310_15_Both/>
    }
    else{
      if(conductorType) {
        return  <T310_15_AL/>
      }
      else {return  <T310_15_CU/>}
    }
       
  }

    
  return (
    
    <TableContainer className='this-is-a-table' component={Paper}>
      <Stack direction="row" spacing={.5} alignItems="center" justifyContent={'center'} mt={2} mx={1}>
        <Typography>Copper</Typography>
        <Switch  color="default" disabled={conductorToggleDisable} checked={conductorType} onChange={changeConductorType}></Switch>
        <Typography>Aluminum</Typography>
        <Checkbox checked={bothStatus} onChange={viewBoth}></Checkbox>
        <Typography>View both</Typography>
      </Stack>
      <Typography>Allowable Ampacities of Insulated Conductors Rated Up to and Including 2000 Volts, 60°C Through 90°C (140°F Through 194°F), Not More Than Three Current-Carrying Conductors in Raceway, Cable, or Earth (Directly Buried), Based on Ambient Temperature of 30°C (86°F)</Typography>
      {rowData()}
    </TableContainer>
  )
}

export default Table310_15_b_16