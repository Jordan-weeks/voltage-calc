import React from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody, TableFooter } from '@mui/material'

const T310_15_Both = () => {


  const createData = (size, cu60, cu75, cu90, al60, al75, al90) =>{
    return {size, cu60, cu75, cu90, al60, al75, al90}
}

  const rows = [
    createData('both'),
      createData('18', '—', '—', '14', '—', '—', '—'),
      createData('16', '—', '—', '18', '—', '—', '—'),
      createData('14', '15', '20', '25', '—', '—', '—'),
      createData('12', '20', '25', '30', '15', '20', '25'),
      createData('10', '30', '35', '40', '25', '30', '35'),
      createData('8', '40', '50', '55', '35', '40', '45'),
      createData('6', '55', '65', '75', '40', '50', '55'),
      createData('4', '70', '85', '95', '55', '65', '75'),
      createData('3', '85', '100', '115', '65', '75', '85'),
      createData('2', '95', '115', '130', '75', '90', '100'),
      createData('1', '110', '130', '145', '85', '100', '115'),
      createData('1/0', '125', '150', '170', '100', '120', '135'),
      createData('2/0', '145', '175', '195', '115', '135', '150'),
      createData('3/0', '165', '200', '225', '130', '155', '175'),
      createData('4/0', '195', '230', '260', '150', '180', '205'),
      createData('250', '215', '255', '290', '170', '205', '230'),
      createData('300', '240', '285', '320', '195', '230', '260'),
      createData('350', '260', '310', '350', '210', '250', '280'),
      createData('400', '280', '335', '380', '225', '270', '305'),
      createData('500', '320', '380', '430', '260', '310', '350'),
      createData('600', '350', '420', '475', '285', '340', '385'),
      createData('700', '385', '460', '520', '315', '375', '425'),
      createData('750', '400', '475', '535', '320', '385', '435'),
      createData('800', '410', '490', '555', '330', '395', '445'),
      createData('900', '435', '520', '585', '355', '425', '480'),
      createData('1000', '455', '545', '615', '375', '445', '500'),
      createData('1250', '495', '590', '665', '405', '485', '545'),
      createData('1500', '525', '625', '705', '435', '520', '585'),
      createData('1750', '545', '650', '735', '455', '545', '615'),
      createData('2000', '555', '665', '750', '470', '560', '630'),
]

  return (
    <Table style={{ tableLayout: 'fixed' }} stickyHeader>
    <TableHead>
      <TableRow>
        <TableCell colSpan={7}>
        NEC Table 310.15(b)(16)
        </TableCell>            
      </TableRow>
      <TableRow >
        <TableCell></TableCell>
        <TableCell colSpan={3} align={'center'} sx={{borderRight: 2 }}>Copper conductors</TableCell>
        <TableCell colSpan={3} align={'center'}>Aluminum conductors</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ top: 57}} align={'center'}>Size (AWG or Kcmil)</TableCell>
        <TableCell style={{ top: 57}} align={'center'}>60&deg;C (140&deg;F)</TableCell>
        <TableCell style={{ top: 57}} align={'center'}>75°C (167°F)</TableCell>
        <TableCell style={{ top: 57}} align={'center'} sx={{borderRight: 2 }}>90°C (194°F)</TableCell>
        <TableCell style={{ top: 57}} align={'center'}>60&deg;C (140&deg;F)</TableCell>
        <TableCell style={{ top: 57}} align={'center'}>75°C (167°F)</TableCell>
        <TableCell style={{ top: 57}} align={'center'}>90°C (194°F)</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) =>(
        <TableRow hover key={row.size}>
          <TableCell align={'center'}>{row.size}</TableCell>
          <TableCell align={'center'}>{row.cu60}</TableCell>
          <TableCell align={'center'}>{row.cu75}</TableCell>
          <TableCell align={'center'} sx={{borderRight: 2 }}>{row.cu90}</TableCell>
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
        <TableCell>Types: TW, UF</TableCell>
        <TableCell>Types: RHW, THHW, THW, THWN, XHHW, USE, ZW</TableCell>
        <TableCell>Types: TBS, SA, SIS, FEP, FEPB, MI, RHH, RHW-2, THHN, THHW, THW-2, THWN-2, USE-2, XHH, XHHW, XHHW-2, ZW-2</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
  
  )
}

export default T310_15_Both