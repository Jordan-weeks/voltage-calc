import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(rating, copper, aluminum) {
  return { rating, copper, aluminum };
}

const rows = [
  createData('15 Amps', 14, 12),
  createData('20 Amps', 12, 10),
  createData('60 Amps', 10, 8),
  createData('100 Amps', 8, 6),
  createData('200 Amps', 6, 4),
  createData('300 Amps', 4, 2),
  createData('400 Amps', 3, 1),
  createData('500 Amps', 2, '1/0'),
  createData('600 Amps', 1, '2/0'),
  createData('800 Amps', '1/0', '3/0'),
  createData('1000 Amps', '2/0', '4/0'),
  createData('1200 Amps', '3/0', 250),
  createData('1600 Amps', '4/0', 350),
  createData('2000 Amps', 250, 400),
  createData('2500 Amps', 350, 600),
  createData('3000 Amps', 400, 600),
  createData('4000 Amps', 500, 750),
  createData('5000 Amps', 700, 1200),
  createData('6000 Amps', 800, 1200),
];

export default function Table250_122() {
  return (
    <TableContainer className='this-is-a-table' component={Paper} sx={{}}>
      <Table stickyHeader >
        <TableHead>
          <TableRow>
            <TableCell align={'center'} colSpan={3}>
              NEC Table 250.122 Minimum Size Equipment Grounding Conductor
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align='center' colSpan={2}>
              Size (AWG or KCMIL)
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell >Rating or setting of automatic overcurrent device in circuit ahead of equipment, conduit, etc. Not exceeding (Amperes)</TableCell>
            <TableCell >Copper</TableCell>
            <TableCell >Aluminum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow hover key={row.rating}>
              <TableCell>{row.rating}</TableCell>
              <TableCell>{row.copper}</TableCell>
              <TableCell>{row.aluminum}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
