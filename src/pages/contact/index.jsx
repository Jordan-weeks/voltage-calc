import { FormControl, Paper, TextField, Typography, Button, Modal, Box } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { Container } from '@mui/system'
import React from 'react'
import { useState,  } from 'react';
import {formValidation} from './formValidation.js'


const Contact = () => {
  const initialValues = { name: "", email: "", message: "" }
  const [form, setForm] = useState(initialValues)
  const [errorModal , setErrorModal] = useState({status:false, message:''})
  const [successModal , setSuccessModal] = useState(false)
  
  const handleErrorClose = () =>{
      setErrorModal({status:false, message:''})
    }
    const handleSuccessClose=() =>{
      setSuccessModal(false)
    }

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value });
  
  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
  const checkForm = () =>{
    formValidation(form,setErrorModal,setSuccessModal,submitForm)
  }
  const submitForm = () => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", form })
    })
      .then(() => setForm(initialValues))
      .catch(error => alert(error));

    
  };
  

  return (
    <Paper sx={{minHeight: '100vh'}}>
      {/* Success modal */}
      <Modal
        open={successModal}
        onClose={handleSuccessClose}
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
            Success!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Thank you for your feedback!
          </Typography>
          <Button onClick = {handleSuccessClose}>Close</Button>
        </Box>
      </Modal>
      {/* Error modal */}
      <Modal
        open={errorModal.status}
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
            {errorModal.message}
          </Typography>
          <Button onClick = {handleErrorClose}>Close</Button>
        </Box>
      </Modal>

      <Typography variant={"h4"} sx={{textAlign: 'center'}}>Feedback...</Typography>
      {/* <input type="hidden" name="form-name" value="contact" /> */}
      <Container>
        <FormControl fullWidth>
          <TextField sx={{mt: 2}} name={'name'}  value={form.name} onChange={handleChange} label={'name'}></TextField>
          <TextField sx={{my: 2}} name = {'email'} value={form.email} onChange={handleChange} label={'email'}></TextField>
          <TextField label={'message'} name={'message'} value={form.message} onChange = {handleChange}  multiline></TextField>
          
        </FormControl>
          <Button 
            color={'secondary'}
            onClick={checkForm}
            sx={{mt:2}} variant="contained" endIcon={<SendIcon />}>
          Send
          </Button>
      </Container>
      <input type="hidden" name="form-name" value="contact" />
    </Paper>
   
  )
}

export default Contact