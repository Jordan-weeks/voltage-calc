import { Card, CardContent, CardActions, Button, Container, Typography, Link } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Home = () => {
  return (

    <Container>
      <Typography color={'secondary.dark'} variant="h3" sx={{textAlign: 'center'}}>Online references built for electricians by an electrician.</Typography>
      <Container>

        <Card 
          sx={{ minWidth: 275, my:2 }}
          elevation={3}>
        <CardContent>
          
          <Typography variant="h4" component="div">
            Calculators
          </Typography>
          <CardActions>
          <Link color ={'primary.dark'} component={RouterLink} to="voltage-calculator">Voltage Drop Calculator</Link> 
          </CardActions>
          <CardActions>
          <Link color ={'primary.dark'} component={RouterLink} to="conduit-fill">Conduit Fill</Link>
        </CardActions>
        </CardContent>
      </Card>

      <Card 
      sx={{ minWidth: 275, my:2 }}
      elevation={3}
      color={'primary.dark'}>
        <CardContent>
          
          <Typography variant="h4" component="div">
            Tables
          </Typography>
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
        
        
        
        
        {/* <Card>
          Calculators</Card>
        <Card>Tables</Card>
        <Card>Other</Card> */}
      </Container>
    </Container>
    
  )
}

export default Home