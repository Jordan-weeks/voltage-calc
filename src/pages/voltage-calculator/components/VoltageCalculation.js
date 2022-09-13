// Voltage Drop Equations

// Voltage Drop = √3 I ( R Cos θ + X Sin θ) L
//  3∅
// Voltage Drop = 21 ( R Cos θ + X Sin θ) L
//  1∅

// Voltage Drop = in volts (V)

// I = Current in amperes
// R= Conductive resistance in ohms/ 1000 ft.
// X= Conductor inductive reactance in ohms/1000 ft.
// L= one way length of circuit ( source to load) in thousands of feet (K ft.)
// Z = Complex impedance ohms/ 1000 ft. obtain from Tables.
// θ = Phase angle of load
// Cos θ = Power Factor: Motors see 6-5, 6-6, .6-.8 is usual see 5-1 to 5-8 for more power factor calculations,
// also 8-2
// Given voltage drop, find wire size
// Voltage Drop 3∅ = √3 I (Z) L
// Z = Voltage Drop = Vd
//  √3 I L √3 IL
// Voltage Drop 1 ∅= 21 (Z) L
// Z = Voltage Drop = Vd
//  2 I L 2 IL




export  const calculateVdPercent = (phase, size, volts, amps, length) =>{
        let phaseNumber = phase === 1 ? 2 : 1.732 
        let conductorType = 12.9
        // let voltage = volts

        
        // voltage lost
        let lostVoltage = (phaseNumber * size * amps * length) / 1000
        // volts at end of line
        let endOfLineVolts = volts -lostVoltage
       let vdPercent = (lostVoltage/volts) *100 *.9
       
        return {endOfLineVolts: endOfLineVolts, 
                vdPercent: vdPercent}
    }
  
 

