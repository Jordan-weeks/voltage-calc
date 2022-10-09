import React from 'react'
import TableGec from './TableGec'
import Table250_102 from './Table250_102'
import { Link, Routes, Route } from 'react-router-dom'

const Tables = () => {
  return (
    <>
    <span>Select a table</span>
    <Link to="/tables/egc" > EGC</Link>
    <Link to="/tables/gec">GEC</Link>

    <Routes>
      <Route path="/egc" element={<Table250_102/>}/>
      <Route path="/gec" element={<TableGec/>}/>
      
    </Routes>
</>
    
  )
}

export default Tables