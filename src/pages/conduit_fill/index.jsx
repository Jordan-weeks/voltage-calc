import React from 'react'
import { Typography, Container, Button, Modal, Box, ButtonGroup, Paper} from '@mui/material'
import { useState } from 'react'
import SingleConductor from './components/SingleConductor'
import Conduit from './Conduit'
import PercentageOutput from './components/PercentageOutput'
import {calculateCmils, calculatePercent, findConduitArea} from './components/Calculate'
import { useEffect } from 'react'

const ConduitFill = () => {

const testConductors = [
        {
            size: '',
            type: '',
            quantity: '',
            id: 1,
            totalArea: ""
        },

    ]
    const [conductors, setConductors] = useState(testConductors)
    const [conduitType, setConduitType] = useState({type: '', size: ''})
    const [totalConductorArea, setTotalConductorArea] = useState(0)
    const [totalConduitArea, setTotalConduitArea] = useState('')
    const [percentageFill, setPercentageFill] = useState(0)
    const [displayOutput, setDisplayOutput] = useState(false)
    const [errorModal, setErrorModal] = useState(false)

    useEffect(() => {
        setPercentageFill(calculatePercent(totalConductorArea, totalConduitArea))
    }, [totalConduitArea,totalConductorArea])
    
    useEffect(() => {
        window.scrollTo({top: 1000000, left: 0, behavior: 'smooth'})
    }, [conductors.length])
    

    const addConductor = () => {
        const id = conductors.length ? conductors[conductors.length -1].id +1 : 1
        const blankConductor = {
            size: "",
            type: "",
            quantity: "",
            id: id
        }
        setConductors([...conductors, blankConductor])
        // setTimeout(() => {
        //     window.scrollTo({top: 1000000, left: 0, behavior: 'smooth'})
        // }, 1000);
        
    }

    const calculate = () =>{
        setTotalConductorArea(calculateCmils(conductors))
        setTotalConduitArea(findConduitArea(conduitType))
        setDisplayOutput(true)
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        
        //determine conduit fill %

        // console.log(conductors)
    }
    const resetBtn = () =>{
        setConductors(testConductors)
        setConduitType({type: '', size: ''})
        setDisplayOutput(false)

    }
    const validate = () =>{
        if(conductors.some((conductor)=> conductor.size === '' || conductor.type === '' || conductor.quantity === ''
        ))
        setErrorModal(true)
        else if (conduitType.type === '' || conduitType.size === '' ){
            setErrorModal(true)
        }
        else calculate()
    }
      
      
    //         setErrorModal(conductors.some((conductor)=>{
    //     conductor.size === '' || conductor.type === '' || conductor.quantity === ''
    // }))        
    // }

    const handleErrorClose = () =>{
        setErrorModal(false)
    }


  return (
   <>
   
   
   
    {/* error modal */}
    
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

    <Container maxWidth= 'lg'>
    <Typography 
      variant="h3"
      align= 'center'
      sx={{my: '.5em'}}>
      Conduit Fill
    </Typography>
    
    {displayOutput ? 
    <PercentageOutput 
    percentageFill = {percentageFill}
    totalConductorArea={totalConductorArea}
    totalConduitArea={totalConduitArea}/>
    : null}
        
    <Conduit
      conduitType={conduitType} 
      setConduitType={setConduitType}>
    </Conduit>
        
    {conductors.map((conductor)=>
      <SingleConductor 
      key ={conductor.id} 
      id={conductor.id} 
      conductors={conductors} 
      setConductors={setConductors}>
      </SingleConductor>)
      }
    
    <ButtonGroup variant={'contained'} sx={{my:1}}>
      <Button  onClick={addConductor}>Add Conductor</Button>
      <Button  onClick = {validate}>Calculate</Button>
      <Button  onClick = {resetBtn}>Reset</Button>
    </ButtonGroup>

    </Container>
    <Container >
      <Typography variant= "caption">All values are based off of chapter 9 NFPA 70.</Typography>
    </Container>
    
        
    </>
   
  )
}

export default ConduitFill