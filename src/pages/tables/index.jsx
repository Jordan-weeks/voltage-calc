import React, { useState } from 'react'
import Landing from './Landing'
import TABLE250_102 from './Table250_102'
import TABLE250_122 from './Table250_122'
import TABLE310_15_B_16 from './T310_15_b_16/Table310_15_b_16.jsx'

import { FormControl, InputLabel, Select, MenuItem  } from '@mui/material'
import { Routes, Route, useNavigate} from 'react-router-dom'


const Tables = () => {

  let navigate = useNavigate()
  let [selectedTable, setSelectedTable] = useState('')
  

  const handleChange = (e) =>{
    setSelectedTable(e.target.value)
    navigate(`/tables/${e.target.value}`)
  }


  return (
    <>
    <FormControl sx={{mt:'1em'}} fullWidth >
  <InputLabel id="demo-simple-select-label">Table</InputLabel>
  <Select
    labelId="selected-table"
    id="selected-table"
    value={selectedTable}
    label="Table"
    onChange={handleChange}
  >
    <MenuItem value='T250.122'>250.122 Minimum Size Equipment Grounding Conductor </MenuItem>
    <MenuItem value='T250.102'>Table 250.102(C)(1)</MenuItem>
    <MenuItem value='T310.15-b-16'>310.15(b)(16)</MenuItem>
  </Select>
</FormControl>

    <Routes>
      <Route path="/" element={<Landing/>}></Route>
      <Route path="/*" element={<Landing/>}></Route>
      <Route path="/T250.122" element={<TABLE250_122/>}/>
      <Route path="/T250.102" element={<TABLE250_102/>}/>
      <Route path="/T310.15-b-16" element={<TABLE310_15_B_16/>}/>
      
    </Routes>
</>
    
  )
}

export default Tables