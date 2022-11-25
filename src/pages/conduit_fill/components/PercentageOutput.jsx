import React from 'react'
import { Box, CircularProgress, Typography, Stack } from '@mui/material'
import { Container } from '@mui/system'

const PercentageOutput = ({percentageFill, totalConductorArea, totalConduitArea}) => {
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5em'
    }} >
    <Box sx={{
      mx: 'auto',    
      position: 'relative',
      display: 'inline-flex' }}>
      <CircularProgress size={'7em'} variant="determinate" value={percentageFill} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h4" component="div" color="text.secondary">
          {`${Math.round(percentageFill)}%`}
        </Typography>
      </Box>
      
    </Box>
    <Stack>
    <Typography>Total conduit area: {totalConduitArea}</Typography>
    <Typography>Total conductor area: {totalConductorArea}</Typography>
  </Stack>
  </Container>
  )
}

export default PercentageOutput