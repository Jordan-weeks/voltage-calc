import React from 'react'
import { Card, CardContent, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useState, useEffect } from 'react'

const Conduit = ({conduitType, setConduitType}) => {
    const [menuItemList, setMenuItemList] = useState([]) 

    
    
    useEffect(() => {
        if(conduitType.type === ''){
            setMenuItemList([])
        }
      else if (conduitType.type === 'lfnc'){
        setMenuItemList(['1/2', '3/4', '1', '1-1/4', '1-1/2','2'])
      }
      
      else setMenuItemList(['1/2', '3/4', '1', '1-1/4', '1-1/2','2','2-1/2','3','3-1/2','4'])
    
    
    }, [conduitType])
    

    const  changeType = (e) => {
        setConduitType({...conduitType, type: e.target.value})
    }
    const changeSize = (e) => {
        setConduitType({...conduitType, size: e.target.value})
    }




  return (
    <Card 
        sx={{mt:2}}
        elevation={4}>
        <CardContent>        
            <FormControl required fullWidth sx={{mb:1.5}}>
                <InputLabel>Conduit Type</InputLabel>        
                <Select value={conduitType.type} onChange={(e) => changeType(e)} label='Conductor Type'>
                <MenuItem value = {'emt'}>Electrical Metallic Conduit</MenuItem>            
                <MenuItem value = {'rmc'}>Rigid Metal Conduit</MenuItem>
                <MenuItem value = {'imc'}>Intermediate Metal Conduit</MenuItem>
                <MenuItem value = {'fmc'}>Flexible Metal Conduit</MenuItem>
                <MenuItem value = {'lfnc'}>Liquidtight Flexible Nonmetallic Conduit</MenuItem>
                <MenuItem value = {'lfmc'}>Liquidtight Flexible Metallic Conduit</MenuItem>
                <MenuItem value = {'sch40pvc'}>Schedule 40 PVC</MenuItem>
                <MenuItem value= {'sch80pvc'}>Schedule 80 PVC</MenuItem>
                </Select>        
            </FormControl>
            <FormControl required fullWidth sx={{mb:1.5}}>
                <InputLabel>Size</InputLabel>        
                <Select value = {conduitType.size} onChange={changeSize} label='Conductor Type'>
                { conduitType.type === ''?
                 <MenuItem value ={''}>Select conduit type</MenuItem> :
                menuItemList.map((size, index)=>{
                    return <MenuItem key={index} value ={size}>{`${size}"`}</MenuItem>
                } )}
                
                </Select>        
            </FormControl>
        </CardContent>
    </Card>
  )
}

export default Conduit