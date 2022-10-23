import React from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody, TableFooter } from '@mui/material'

const T310_15_AL = () => {

  const createData = (size, al60, al75, al90) =>{
    return {size, al60, al75, al90}
  }


  const rows = [
    createData('18', '—', '—', '—'),
    createData('16', '—', '—', '—'),
    createData('14', '—', '—', '—'),
    createData('12', '15', '20', '25'),
    createData('10', '25', '30', '35'),
    createData('8', '35', '40', '45'),
    createData('6', '40', '50', '55'),
    createData('4', '55', '65', '75'),
    createData('3', '15', '65', '75', '85'),
    createData('2', '30', '75', '90', '100'),
    createData('1', '145', '85', '100', '115'),
    createData('1/0', '100', '120', '135'),
    createData('2/0', '115', '135', '150'),
    createData('3/0', '130', '155', '175'),
    createData('4/0', '150', '180', '205'),
    createData('250', '170', '205', '230'),
    createData('300', '195', '230', '260'),
    createData('350', '210', '250', '280'),
    createData('400', '225', '270', '305'),
    createData('500', '260', '310', '350'),
    createData('600', '285', '340', '385'),
    createData('700', '315', '375', '425'),
    createData('750', '320', '385', '435'),
    createData('800', '330', '395', '445'),
    createData('900', '355', '425', '480'),
    createData('1000', '375', '445', '500'),
    createData('1250', '405', '485', '545'),
    createData('1500', '435', '520', '585'),
    createData('1750', '455', '545', '615'),
    createData('2000', '470', '560', '630')
  ]


  return (
    <Table  style={{ tableLayout: 'fixed' }} stickyHeader>
    <TableHead>
      <TableRow >
        <TableCell colSpan={4} align={'center'}>Aluminum conductors</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ top: 57 }} align={'center'}>Size (AWG or Kcmil)</TableCell>
        <TableCell style={{ top: 57 }} align={'center'}>60°C (140°F)</TableCell>
        <TableCell style={{ top: 57 }} align={'center'}>75°C (167°F)</TableCell>
        <TableCell style={{ top: 57 }} align={'center'}>90°C (194°F)</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) =>(
        <TableRow hover key={row.size}>
          <TableCell align={'center'}>{row.size}</TableCell>
          <TableCell align={'center'}>{row.al60}</TableCell>
          <TableCell align={'center'}>{row.al75}</TableCell>
          <TableCell align={'center'}>{row.al90}</TableCell>
        </TableRow>
        ))}
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell></TableCell>
        <TableCell>Types: TW, UF</TableCell>
        <TableCell>Types: RHW, THHW, THW, THWN, XHHW, USE, ZW</TableCell>
        <TableCell>Types: TBS, SA, SIS, FEP, FEPB, MI, RHH, RHW-2, THHN, THHW, THW-2, THWN-2, USE-2, XHH, XHHW, XHHW-2, ZW-2</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
  )
}

export default T310_15_AL