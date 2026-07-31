//Function And rest operator.

function addnumbers(num1,num2,...num){
    console.log(num1,num2,num)
    return num1+num2+num.reduce((acc,current)=> acc+current,0)
}

const result=addnumbers(10,20,30,40,50,60,70,80,90,100)
console.log(`Addition of Numbers is: ${result}`)

//Arrow Functions

const subtract=(num1,num2)=> num1-num2
console.log(`Substraction of ${10} & ${20} is ${subtract(10,20)}`)

const multiply=(num1,num2)=>num1*num2
console.log(`Multiplication of ${10} & ${20} is ${multiply(10,20)}`);

//IIFE
((num1,num2,num3)=> {
    console.log(`Addition of This Three Numbers is: ${num1+num2+num3}`)
})(10,20,30);