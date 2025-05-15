const switchTempature = (deg, scale)=>scale === 'C'? deg*1.8+32 : (deg-32)/1.8//если условие верно, то тернарный оператор выполнит условие, а если не верно, то выполнит код после двоеточия

console.log(switchTempature(0, 'C'))
console.log(switchTempature(0, 'F'))