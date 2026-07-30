//Date Represent total Miliseconds from 1 jan 1970
let currentDate=new Date();
console.log(`Current Date in Row Format: ${currentDate}`)
console.log(`Current Date in Date String Format: ${currentDate.toDateString()}`)
console.log(`Current Date in toString Format: ${currentDate.toString()}`)
console.log(`Current Date in toJSON Format: ${currentDate.toJSON()}`)
console.log(`Current Date in toLocaleString Format: ${currentDate.toLocaleString()}`)
console.log(`Current Date in toLocaleDateString Format: ${currentDate.toLocaleDateString()}`)

//Creating Date objects using different formats.
let currentDate2=new Date(2026,6,30,23,30)
console.log(`\nTodays Date using Hours and Minutes: ${currentDate2.toDateString()}`)

let currentDate3=new Date("2026-07-31")
console.log(`\nTodays Date using Hours and Minutes: ${currentDate3.toLocaleDateString()}`)
console.log(`${currentDate3.getDate()}\t${currentDate3.getDay()}\t${currentDate3.getMonth()}\t${currentDate3.getHours()}`)


//TimeStamp
let CurrentTime=Date.now();
let tomarrowDate=new Date("2026-06-31")
console.log(`Todays date Using MiliSeconds: ${CurrentTime} and in Seconds: ${Math.floor(CurrentTime/1000)}`)
console.log(`Total Time taken is ${CurrentTime-tomarrowDate}`)