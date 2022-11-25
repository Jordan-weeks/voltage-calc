



export  const calculateVdPercent = (phase, size, volts, amps, length) =>{
        let phaseNumber = phase === 1 ? 2 : 1.732 
        // let conductorType = 12.9
        // let voltage = volts

        
        // voltage lost
        let lostVoltage = (phaseNumber * size * amps * length) / 1000
        // volts at end of line
        let endOfLineVolts = volts -lostVoltage
       let vdPercent = (lostVoltage/volts) *100 *.9
       
        return {endOfLineVolts: endOfLineVolts, 
                vdPercent: vdPercent}
    }
  
 

