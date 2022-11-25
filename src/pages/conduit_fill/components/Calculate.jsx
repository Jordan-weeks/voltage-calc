const thhn = 
        {
        '14str': .0097,        
        '12str': .0133,        
        '10str': .0211,
        '8str': .0366,
        '6str': .0507,
        '4str': .0824,
        '3str': .0973,
        '2str': .1158,
        '1str': .1562,
        '1/0str': .1855,
        '2/0str': .2223,
        '3/0str': .2679,
        '4/0str': .3237,
        '250': .3970,
        '300': .4608,
        '350': .5242,
        '400': .5863,
        '500': .7073,
        '600': .8676,
        '750': 1.0496,
        '1000': 1.3478
        }
const thwn2 = 
        {
        '14str': .0097,        
        '12str': .0133,        
        '10str': .0211,
        '8str': .0366,
        '6str': .0507,
        '4str': .0824,
        '3str': .0973,
        '2str': .1158,
        '1str': .1502,
        '1/0str': .1855,
        '2/0str': .2223,
        '3/0str': .2679,
        '4/0str': .3237,
        '250': .3970,
        '300': .4608,
        '350': .5242,
        '400': .5863,
        '500': .7073,
        '600': .8676,
        '750': 1.0496,
        '1000': 1.3478
        }
const xhhw = 
    {
    '14str': .0139,        
    '12str': .0181,        
    '10str': .0243,
    '8str': .0437,
    '6str': .0590,
    '4str': .0814,
    '3str': .0962,
    '2str': .1146,
    '1str': .1534,
    '1/0str': .1825,
    '2/0str': .2190,
    '3/0str': .2642,
    '4/0str': .3197,
    '250': .3904,
    '300': .4536,
    '350': .5166,
    '400': .5782,
    '500': .6984,
    '600': .8709,
    '750': 1.0532,
    '1000': 1.3478
    }


const emt = {
    '1/2': .304,
    '3/4': .533,
    '1': .864,
    '1-1/4': 1.496,
    '1-1/2': 2.036,
    '2': 3.356,
    '2-1/2': 5.858,
    '3': 8.846,
    '3-1/2': 11.545,
    '4': 14.753
}
const rmc = {
    '1/2': .314,
    '3/4': .549,
    '1': .887,
    '1-1/4': 1.526,
    '1-1/2': 2.071,
    '2': 3.408,
    '2-1/2': 4.866,
    '3': 7.499,
    '3-1/2': 10.010,
    '4': 12.882
}
const sch40pvc = {
    '1/2': .285,
    '3/4': .508,
    '1': .832,
    '1-1/4': 1.453,
    '1-1/2': 1.986,
    '2': 3.291,
    '2-1/2': 4.695,
    '3': 7.268,
    '3-1/2': 9.737,
    '4': 12.554
}
const sch80pvc = {
    '1/2': .217,
    '3/4': .409,
    '1': .688,
    '1-1/4': 1.237,
    '1-1/2': 1.711,
    '2': 2.874,
    '2-1/2': 4.199,
    '3': 6.442,
    '3-1/2': 8.688,
    '4': 11.258
}
const fmc = {
    '1/2': .317,
    '3/4': .533,
    '1': .817,
    '1-1/4': 1.277,
    '1-1/2': 1.858,
    '2': 3.269,
    '2-1/2': 4.909,
    '3': 7.069,
    '3-1/2': 9.621,
    '4': 12.566
}
const lfnc = {
    '1/2': .314,
    '3/4': .541,
    '1': .873,
    '1-1/4': 1.528,
    '1-1/2': 1.981,
    '2': 3.246,
    
}
const lfmc = {
    '1/2': .314,
    '3/4': .541,
    '1': .873,
    '1-1/4': 1.528,
    '1-1/2': 1.981,
    '2': 3.246,
    '2-1/2': 4.881,
    '3': 7.475,
    '3-1/2': 9.731,
    '4': 12.692
}
const imc = {
    '1/2': .342,
    '3/4': .586,
    '1': .959,
    '1-1/4': 1.647,
    '1-1/2': 2.225,
    '2': 3.630,
    '2-1/2': 5.135,
    '3': 7.922,
    '3-1/2': 10.584,
    '4': 13.631
}

const calculateTotalArea = (conductor) =>{
    let conductorType 
    switch (conductor.type) {
        case 'thhn':
            conductorType = thhn
            break;
        case 'xhhw':
            conductorType = xhhw
            break;
        case 'thwn2':
            conductorType = thwn2
            break;
        default:
            break;
    }
    const conductorSize = conductor.size
    const cmils = conductorType[conductorSize]
    const area = conductor.quantity * cmils
    return area

    
} 



export const calculateCmils = (conductors) =>{    
    const cmilArray = conductors.map((conductor)=> {
        return calculateTotalArea(conductor)
    })  
    const sum = cmilArray.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0)

    return sum   
}
export const findConduitArea = (conduitType) =>{
    let type
    switch (conduitType.type) {
        case 'emt':
            type = emt
            break;
        case 'rmc':
            type = rmc
            break;
        case 'sch40pvc':
            type = sch40pvc
            break;
        case 'sch80pvc':
            type = sch80pvc
            break;
        case 'imc':
            type = imc
            break;
        case 'lfmc':
            type = lfmc
            break;
        case 'lfnc':
            type = lfnc
            break;
        case 'fmc':
            type = fmc
            break;
        default:
            break;
    }
    const totalArea = type[conduitType.size]
    return totalArea
}
export const calculatePercent= (totalConductorArea, totalConduitArea) =>{
    const percentFill =  (totalConductorArea/ totalConduitArea) * 100
    return percentFill

}