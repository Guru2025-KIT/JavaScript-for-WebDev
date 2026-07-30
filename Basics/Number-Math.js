//Learning Math library and Number object
let num=Math.floor(Math.random()*100+1)
console.log(`Number Using Random Function: ${num}`)

let num2=Math.random()*10
console.log(num2)
console.log(`Floor Value for ${num2} is ${Math.floor(num2)}`)
console.log(`Ceil Value for ${num2} is ${Math.ceil(num2)}`)
console.log(`Min Value for ${Math.floor(num2)} & ${num} is ${Math.min(Math.floor(num2),num)}`)
console.log(`Max Value for ${Math.floor(num2)} & ${num} is ${Math.max(Math.floor(num2),num)}`)

let min=20
let max=90
let num3=Math.floor(Math.random()*(max-min+1)+min)
console.log(`Random Value Between ${min} & ${max} is ${num3}`)