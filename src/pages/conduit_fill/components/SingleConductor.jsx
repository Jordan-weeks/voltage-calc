import React from 'react'
import { Card, Select, MenuItem, FormControl, InputLabel, CardContent, Button, Input} from '@mui/material'
import { FaMinus } from 'react-icons/fa'

const SingleConductor = ({id, conductors, setConductors}) => {

    const foundConductor = conductors.find(conductor => conductor.id === id)

    const handleDelete =  () =>{
        const newConductors = conductors.filter((conductor)=> conductor.id !== id)
        setConductors(newConductors)
    }
    const changeType = (e) =>{
        const newConductors = conductors.map((conductor) => conductor.id === id ?{
            ...conductor,type: e.target.value  
        }: conductor )
        setConductors(newConductors)
    }

    const changeSize = (e) =>{
        const newConductors = conductors.map((conductor) => conductor.id === id ?{
            ...conductor,size: e.target.value  
        }: conductor )
        setConductors(newConductors)
    }

    const changeQuantity = (e) =>{
        const result = e.target.value.replace(/\D/g, '')
        const newConductors = conductors.map((conductor) => conductor.id === id ?{
            ...conductor,quantity: result  
        }: conductor )
        setConductors(newConductors)
    }



    


  return (
    <Card 
        sx={{mt:4, mb:2}}
        elevation={4}>
        <CardContent>

        
        <FormControl required fullWidth sx={{mb:1.5}}>
            <InputLabel>Conductor Type</InputLabel>        
            <Select required value={foundConductor.type} onChange={(e) => changeType(e)} label='Conductor Type'>
            <MenuItem value = {'thhn'}>THHN</MenuItem>
            <MenuItem value= {'xhhw'}>XHHW</MenuItem>
            <MenuItem value = {'thwn2'}>THWN-2</MenuItem>

            </Select>        
        </FormControl>
        <FormControl required fullWidth sx={{mb:1.5}}>
            <InputLabel>Size</InputLabel>        
            <Select required value = {foundConductor.size} onChange={changeSize} label='Conductor Type'>
            {/* <MenuItem value = {'14sol'}>14 Solid</MenuItem> */}
            <MenuItem value ={'14str'}>14 Stranded</MenuItem>
            {/* <MenuItem value = {'12sol'}>12 Solid</MenuItem> */}
            <MenuItem value = {'12str'}>12 Stranded</MenuItem>
            {/* <MenuItem value = {'10sol'}>10 Solid</MenuItem> */}
            <MenuItem value = {'10str'}>10 Stranded</MenuItem>
            <MenuItem value = {'8str'}>8 Stranded</MenuItem>
            <MenuItem value = {'6str'}>6 Stranded</MenuItem>
            <MenuItem value = {'4str'}>4 Stranded</MenuItem>
            <MenuItem value = {'3str'}>3 Stranded</MenuItem>
            <MenuItem value = {'2str'}>2 Stranded</MenuItem>
            <MenuItem value = {'1str'}>1 Stranded</MenuItem>
            <MenuItem value = {'1/0str'}>1/0 Stranded</MenuItem>
            <MenuItem value = {'2/0str'}>2/0 Stranded</MenuItem>
            <MenuItem value = {'3/0str'}>3/0 Stranded</MenuItem>
            <MenuItem value = {'4/0str'}>4/0 Stranded</MenuItem>
            <MenuItem value = {'250'}>250 KCMIL</MenuItem>
            <MenuItem value = {'300'}>300 KCMIL</MenuItem>
            <MenuItem value = {'350'}>350 KCMIL</MenuItem>
            <MenuItem value = {'400'}>400 KCMIL</MenuItem>
            <MenuItem value = {'500'}>500 KCMIL</MenuItem>
            <MenuItem value = {'600'}>600 KCMIL</MenuItem>
            <MenuItem value = {'750'}>750 KCMIL</MenuItem>
            <MenuItem value = {'1000'}>1000 KCMIL</MenuItem>
            </Select>        
        </FormControl>
        <FormControl required fullWidth>
            <InputLabel>Quantity</InputLabel>
            <Input value={foundConductor.quantity} onChange={changeQuantity}/>

        </FormControl>
        <Button 
            variant={'contained'} 
            color={'secondary'}
            sx={{my:1}}
            onClick={handleDelete}
            
            >
            <FaMinus></FaMinus>
        </Button>
        </CardContent>
        
    </Card>
  )
}

export default SingleConductor