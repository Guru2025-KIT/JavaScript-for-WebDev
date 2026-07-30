//Understanding different String methods.

let str1="   Guruprasad Shinde";
let str2=str1.trim();

console.log(`Length of String is ${str2.length}`)
console.log(`First Character of String is ${str2.charAt(0)}`)
console.log(`Trimed  String is ${str2.trim()}`)
console.log(`Concatination of String is ${str2.concat(" Tukaram")}`)
console.log(`Whether String Ends with Tukaram? ${str2.endsWith("Tukaram")}`)
console.log(`Whether String includes space? ${str2.includes(" ")}`)
console.log(`Index of Character T in String is ${str2.indexOf('T')}`)
console.log(`Last Index of U in String is ${str2.lastIndexOf('u')}`)
console.log(`Slicing of String is ${str2.slice(0,11)}`)