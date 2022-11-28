import { Container, Modal, Typography, Button, Box } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import InputParameters from './components/InputParameters'
import Output from './components/Output'





const VoltageCalculator = () => {
    const [phase, setPhase] = useState('')
    const [size, setSize] = useState('')
    const [volts, setVolts] = useState('')
    const [amps, setAmps] = useState('')
    const [length, setLength] = useState('')
    const [voltageDropPercent, setVoltageDropPercent] = useState('')
    const [endOfLineVolts, setEndOfLineVolts] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [errorModal, setErrorModal] = useState(false)
    // const [minSize, setMinSize] = useState('')
    // const [maxDistance, setMaxDistance] = useState('')


const handleErrorClose = () =>{
  setErrorModal(false)
  }
  return (
    <Container>

      <Modal
        open={errorModal}
        onClose={handleErrorClose}
        aria-labelledby="error"
      >
        <Box sx={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '75vw',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,p: 4,
            }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Error!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please complete all fields and try again.
          </Typography>
          <Button onClick = {handleErrorClose}>Close</Button>
        </Box>
      </Modal>
      {isSubmitted ? 
          <Output
          phase={phase}
          size={size}
          volts={volts}
          amps={amps}
          length={length}
          voltageDropPercent={voltageDropPercent}
          endOfLineVolts = {endOfLineVolts}
          />
          : null
          }
      <InputParameters phase = {phase}
     setPhase= {setPhase}
     size={size}
     setSize={setSize}
     volts={volts}
     setVolts={setVolts}
     amps={amps}
     setAmps={setAmps}
     length={length}
     setLength={setLength}
     voltageDropPercent= {voltageDropPercent}
     setVoltageDropPercent = {setVoltageDropPercent}
     setEndOfLineVolts ={setEndOfLineVolts}
     setIsSubmitted = {setIsSubmitted}
     setErrorModal={setErrorModal}
     />    
    
  </Container>
  )
}

export default VoltageCalculator