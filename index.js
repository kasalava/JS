const switchTempature = (deg, scale)=>{
    if (scale === 'C') {
        return deg*1.8+32
    } else if (scale ==='F'){
    return (deg-32)/1.8
}    else {return NaN
    }
}
console.log(switchTempature(0, 'C'))
console.log(switchTempature(0, 'F'))