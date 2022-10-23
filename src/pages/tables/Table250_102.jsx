import React from 'react'
import { Table, TableBody, TableHead, TableRow, TableContainer, TableCell, Paper } from '@mui/material';

import './tables.css'


const Table250_102 = () => {

    function createData(largestCopper, largestAluminum, copper, aluminum) {
        return { largestCopper, largestAluminum, copper, aluminum };
      }
    const rows =[
        createData("2 or smaller", "1/0 or smaller", 8, 6),
        createData("1 or 1/0", "2/0 or 3/0", 6, 4),
        createData("2/0 or 3/0", "4/0 or 250", 4, 2),
        createData("Over 3/0 through 350", "Over 250 through 500", 2, "1/0"),
        createData("Over 350 through 600", "Over 500 through 900", "1/0", "3/0"),
        createData("Over 600 through 1100", "Over 900 through 1750", "2/0", "4/0"),
        createData("Over 1100", "Over 1750", "3/0", 250)
    ]    
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                <TableRow>
            <TableCell align={'center'} colSpan={4}>
              NEC Table 250.102(C)(1). Grounded Conductor, Main Bonding Jumper, System Bonding Jumper, and Supply-Side Bonding Jumper for Alternating-Current Systems.
            </TableCell>
          </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>
                        Size of  largest ungrounded conductor or equivalent area for parallel conductors.
                        </TableCell>
                        <TableCell colSpan={2}>
                            Size of grounding Electrode Conductor
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Copper
                        </TableCell>
                        <TableCell>
                            Aluminum
                        </TableCell>
                        <TableCell>
                            Copper
                        </TableCell>
                        <TableCell>
                            Aluminum
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) =>(
                        <TableRow hover key={row.largestCopper}>
                            <TableCell>{row.largestCopper}</TableCell>
                            <TableCell>{row.largestAluminum}</TableCell>
                            <TableCell>{row.copper}</TableCell>
                            <TableCell>{row.aluminum}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
       
    );
 };

export default Table250_102