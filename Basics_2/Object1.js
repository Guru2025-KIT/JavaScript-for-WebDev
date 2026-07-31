//Understanding Creating Objects using 2 ways.

//Uing Literal:
const mySym=Symbol("key2")

const myObj={
    name:"Guruprasad Shinde",
    "College Name":"KIT COEK",
    age:21,
    isloggedin:false,
    lastLogin:["Saturday","Sunday"],
    mySym:"key1"
}

//Ascessing Object Elements using 2 ways.
console.log(`\nAccessing Object members using . :`)
console.log(myObj)
console.log(`My Name is: ${myObj.name}`)
console.log(`Assessing Symbol Element: ${myObj.mySym} but it is of type: ${typeof myObj.mySym}`)
//We Cant Access this like this: myObj.college Name

console.log(`Accesing Objects Elements using ObjName["MemberName"] and this is same for Accessing Symbols:`)


//For Storing Symbols in Objects we need to use []
console.log(`\n\nStoring Symbols in Object:`)
const myObj2={
    name:"Guruprasad Shinde",
    "College Name":"KIT COEK",
    age:21,
    isloggedin:false,
    lastLogin:["Saturday","Sunday"],
    [mySym]:"key1"
}

console.log(`\n\nAccesing Objects Elements using ObjName["MemberName"] and his is same for Accessing Symbols:`)
console.log(myObj2["College Name"])
console.log(myObj[mySym])
console.log(myObj2)
console.log(`My Name is: ${myObj2.name}`)
console.log(`Assessing Symbol Element: ${myObj2[mySym]}`)

//storing Functions in Obj and Us of This KeyWord
console.log(`\n\nStoring Function In Object:`)
myObj2.greet=function(){
    console.log(`Hello, ${this.name}`)
}
console.log(myObj2.greet())
console.log(myObj2.greet)
console.log(myObj2)

//Udating and Locking object
myObj2.name="Guru"
myObj2.isloggedin=true
console.log(`\nLocking Of Object:`)
console.log(`Updating member before Locking Done!\nmyObj2`)
Object.freeze(myObj2)
myObj2.name="Shinde"
console.log(myObj2)