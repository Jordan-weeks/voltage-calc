import React from 'react'
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TableFooter } from '@mui/material'

const ColorTable = ({aColor, bColor, cColor, cFont}) => {
  return (
    <Table size={'small'}>
            
            <TableBody>
                <TableRow>
                    <TableCell sx={{backgroundColor:`${aColor}`, color:'white'}}>1</TableCell>
                    <TableCell sx={{backgroundColor:`${aColor}`, color:'white'}}>43</TableCell>
                    <TableCell sx={{backgroundColor:`${aColor}`, color:'white'}}>{`${aColor}`}</TableCell>
                    <TableCell sx={{backgroundColor:`${aColor}`, color:'white'}}>44</TableCell>
                    <TableCell sx={{backgroundColor:`${aColor}`, color:'white'}}>2</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell sx={{backgroundColor:`${bColor}`, color:'white'}}>3</TableCell>
                    <TableCell sx={{backgroundColor:`${bColor}`, color:'white'}}>45</TableCell>
                    <TableCell sx={{backgroundColor:`${bColor}`, color:'white'}}>{`${bColor}`}</TableCell>
                    <TableCell sx={{backgroundColor:`${bColor}`, color:'white'}}>4</TableCell>
                    <TableCell sx={{backgroundColor:`${bColor}`, color:'white'}}>46</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell sx={{backgroundColor:`${cColor}`, color:`${cFont}`}}>5</TableCell>
                    <TableCell sx={{backgroundColor:`${cColor}`, color:`${cFont}`}}>47</TableCell>
                    <TableCell sx={{backgroundColor:`${cColor}`, color:`${cFont}`}}>{`${cColor}`}</TableCell>
                    <TableCell sx={{backgroundColor:`${cColor}`, color:`${cFont}`}}>6</TableCell>
                    <TableCell sx={{backgroundColor:`${cColor}`, color:`${cFont}`}}>48</TableCell>
                </TableRow>
                
            </TableBody>
        </Table>
  )
}

export default ColorTable