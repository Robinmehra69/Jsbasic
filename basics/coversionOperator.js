let score = "33"

console.log(typeof score)
console.log(typeof (score))
score = "33abs"
let valueInnumber = Number(score)  //number can be written as Number
console.log(typeof valueInnumber) // it is showing "33abs" also a number which is wrong but it is js problem
console.log(valueInnumber)     //NaN is a special type 
score =null
let valueInnumber1 = Number(score)
console.log(valueInnumber1)
console.log(typeof valueInnumber1)
score = undefined
let valueInnumber2 = Number(score)
console.log(valueInnumber2)
console.log(typeof valueInnumber2)
score = true
let valueInnumber3 = Number(score)
console.log(valueInnumber3)
console.log(typeof valueInnumber3)
// "33"=> 33
// "33abc0"=> NaN =not a number and its type is number
// true =>1; false=>0

let isl= 1
let booleanIsLoggedIn  = Boolean(isl)
console.log(booleanIsLoggedIn)  //true

let islo= 0
let booleanIsLoggedI  = Boolean(islo)
console.log(booleanIsLoggedI)

let is= ""
let booleanIsLoggedInn  = Boolean(is)
console.log(booleanIsLoggedInn)  //false

let islog= "robin"
let booleanIsLoggedInog  = Boolean(islog)
console.log(booleanIsLoggedInog)  //true 

let str= 12
let abs = String(str)
console.log(abs)
console.log(typeof abs) //string