import { Card, CardContent, CardActions, Container, Typography, Link, Stack, SvgIcon } from '@mui/material'
import React from 'react'
import {FaCalculator} from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'

const Home = () => {
  return (

    <Container>
      <Typography color={'secondary.dark'} variant="h3" sx={{textAlign: 'center'}}>Online References Built For Electricians.</Typography>
      <Container>

        <Card 
          sx={{ minWidth: 275, my:2 }}
          elevation={3}>
        <CardContent>

          <Stack>
            <Container>
            <Typography variant="h4" component="div">
            Calculators
          </Typography>          
          <CardActions>
          <Link color ={'primary.dark'} component={RouterLink} to="voltage-calculator">Voltage Drop Calculator</Link> 
          </CardActions>
          <CardActions>
          <Link color ={'primary.dark'} component={RouterLink} to="conduit-fill">Conduit Fill</Link>
        </CardActions>
        </Container>
        {/* <SvgIcon component = {FaCalculator}>
            
          </SvgIcon> */}
        
        </Stack>
        </CardContent>
      </Card>

      <Card 
      sx={{ minWidth: 275, my:2 }}
      elevation={3}
      color={'primary.dark'}>
        <CardContent>
          <Stack>
            <Typography variant="h4" component="div">
            Tables
          </Typography>
          </Stack>
          
          <CardActions>
          <Link color ={'primary.dark'}component={RouterLink} to="/tables/T250.122">Table 250.122</Link> 
          </CardActions>
          <CardActions>
          <Link color ={'primary.dark'} component={RouterLink} to="/tables/T250.102">Table 250.102</Link>
        </CardActions>
        <CardActions>
          <Link color ={'primary.dark'} component={RouterLink} to="/tables//T310.15-b-16">Table 310.15(b)(16)</Link>
        </CardActions>
        </CardContent>
      </Card>

      <Card 
          sx={{ minWidth: 275, my:2 }}
          elevation={3}>
        <CardContent>
          
          <Typography variant="h4" component="div">
            Other
          </Typography>
          <CardActions>
          <Link color ={'primary.dark'} component={RouterLink} to="phase-colors">Phase Colors</Link> 
          </CardActions>
          <CardActions>
          <Link color ={'primary.dark'} component={RouterLink} to="about">About</Link>
        </CardActions>
        </CardContent>
      </Card>
        
        
        
        
        {/* <Card>
          Calculators</Card>
        <Card>Tables</Card>
        <Card>Other</Card> */}
      </Container>
    </Container>
    
  )
}

export default Home