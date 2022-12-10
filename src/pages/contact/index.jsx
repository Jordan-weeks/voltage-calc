import { FormControl, Paper, TextField, Typography, Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { Container } from '@mui/system'
import React from 'react'
import { useState,  } from 'react';


const Contact = () => {
  const initialValues = { name: "", email: "", message: "" }
  const [form, setForm] = useState(initialValues)

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value });
  
  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
  
  const handleFormSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };


  return (
    <Paper sx={{minHeight: '100vh'}}>
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
            onClick={handleFormSubmit}
            sx={{mt:2}} variant="contained" endIcon={<SendIcon />}>
          Send
          </Button>
      </Container>
      <input type="hidden" name="form-name" value="contact" />
    </Paper>
   
  )
}

export default Contact