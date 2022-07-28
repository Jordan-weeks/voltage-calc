import React from 'react'

function Output(props) {
  return (
    <div>
    <p>This is where the ouput of the calculation will go: </p>
    <p>the phase is :{props.phase}</p>
    <p>the wire size is :{props.size}</p>
    <p>the voltage is :{props.volts}</p>
    <p>the amperage is :{props.amps}</p>
    <p>the length is :{props.length}</p>
    
    
    </div>
  )
}

export default Output