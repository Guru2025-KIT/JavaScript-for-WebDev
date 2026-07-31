//Array Operations

//Different Ways of Defining arrays.
let var1=100,var2=200,var3=300;
let obj1={
    name:"Guru",
    age:21,
    Marks:100,
    cgpa:9.89
}

let arr1=["Guru",100,"Shinde",200]
console.log(`Array Using [] syntax: ${arr1}`)

let arr2=new Array(1,2,3,"Shinde")
console.log(`Array Using new Array() syntax: ${arr2}`)

let arr3=Array.of(var1,var2,var3)
console.log(`Array Using Array.of() syntax: ${arr3}`)

let arr4=Array.from("Guruprasad")
console.log(`Array Using Array.from(String) syntax: ${arr4}`)

let arr5=Object.keys(obj1)
console.log(`Array Using Object.keys(object) syntax: ${arr5}`)

let arr6=Object.values(obj1)
console.log(`Array Using Object.values(obj) syntax: ${arr6}`)

let arr7=Object.entries(obj1)
console.log(`Array Using Object.entries(object) syntax: ${arr7}`)


//Array Operations

console.log(`\n\nArray Insert at last Using .push(element): ${arr1.push("Sad")} & Array is:${arr1}`)
console.log(`Array Delete from last Using .pop(): ${arr1.pop()} & Array is:${arr1}`)
console.log(`Array unshift(element) add that element at begining and shift all elements to next index: ${arr1.unshift(9)} & Array is:${arr1}`)
console.log(`Array shift() remove element from begining and shift all elements to previous index: ${arr1.shift()} & Array is:${arr1}`)
console.log(`When We perform arr1.push(arr2) array 2 is inserted as one element of Array:${arr1.push(arr2)} and arr1 Becomes: ${arr1}`)
console.log(`Concating Arrays using concat reture new array 1D: ${arr3.concat(arr4)} `)
console.log(`Concating multiple Arrays using Spread Operator reture new array 1D: ${[... arr5,...arr6,... arr7]} `)
console.log(`Flat multi D array in 1D : ${arr1.flat(Infinity)}`)