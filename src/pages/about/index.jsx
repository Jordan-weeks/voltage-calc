import { Link, Typography } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'
import React from 'react'

const About = () => {
  return (
    <Typography variant={"h4"} sx={{m:2}}>
      An online reference site created with the intention to be used in while in the field. 
      If any errors are present, or if theres is a feature you would like to see added in the future, visit the
      <Link color ={'primary.dark'} component={RouterLink} to="/contact"> Contact Page</Link>
    </Typography>
  )
}

export default About