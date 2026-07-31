//Creating Object using Constructor 
//Singleton Object
let myObj = new Object();
myObj.Username = "Guruprasad Shinde";
myObj.rollNo = 58;
myObj.clg = "KIT COEK";
console.log(`Object 1:`,myObj);

let myObj2 = new Object();
myObj2.cgpa = 9.5;
myObj2.location = "Gadhinglaj";
console.log(`Object 2:`,myObj2);

//Combining objects
const newObj = Object.assign({}, myObj, myObj2);
console.log(newObj);
console.log(`Combining 2 Objects`, newObj); 

//Using Spread Operator
console.log({ ...myObj, ...myObj2 });
console.log(myObj.hasOwnProperty('name'));

//De-structuring the Objects
const { Username: name } = myObj;
console.log(name);
