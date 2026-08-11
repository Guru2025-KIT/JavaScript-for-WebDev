const myobj=new Student("Guruprasad","KITCOEK",3,9.87);
let myObj2=new Student("Diksha","KIT")
function Student(name ,clg,year,cgpa){
    this.name=name;
    this.clg=clg;
    this.year=year;
    this.cgpa=cgpa;

    this.greet=function greet(){
        console.log(`Hello ${this.name}! Welcome in the Community! You are From ${this.clg}`);
    }
}

myobj.greet();
myObj2.greet()

//Defining our own methods
String.prototype.trueLength=function(){
    console.log(`True Length of String ${this.trim()} is ${(this.trim()).length}`);
    return this.trim().length;
}
let str=new String("Guru     ")
console.log(`${str.trueLength(str)}`);


//Object level Assigning of method allow us to use it Any Child
Object.prototype.HeyGuru=()=>{
    console.log(`Hello From ${this} Object`);
}

const arr=[10,20,30,40];
const obj={name:"Guru"};
const str1="Guruprasad"

arr.HeyGuru()
obj.HeyGuru()
str1.HeyGuru()
