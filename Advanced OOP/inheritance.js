const person={
    type:"Human",
    gender:"Male/Female"
}

const student={
    name:"Guruprasad",
    clg:"KITCOEK",
    __proto__:person,
}

const teacher={
    name:"Pragati",
    clg:"KITCOEK",
    greet:()=>{
        console.log("I am In Teacher Class")
    },
    __proto__:person,
    
}

console.log(teacher.gender)


//Modern Syntax
Object.setPrototypeOf(student,teacher)
student.greet()