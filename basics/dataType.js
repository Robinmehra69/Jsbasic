"use strict"; //treat all JS code as newer version

// alert (3+3) // we are using node js, not browser
console.log(3 + 4);
console.log(5 + 5);

// let name  ="hitesh"
// let age = 18
// let isLoggedIn = false

//****primitive data types - call by value send the copy of value

//number =>2 to the power of 53
//bigint for big number
//string => ""
//boolean =>true/false
//null -stand alone value
//undefined=> not declared
//symbol => to find uiqueness

//*******reference -(non-primitive)*/

//objects,array,functions
//master js objects and browser events to become prooo!

// console.log(typeof null)  //=> object 
// const isLog= false
// let userEmail;

const id =Symbol('1123')
const id1 = Symbol('1123')
console.log(id===id1)
const bigNumber = 2334535325n
console.log(bigNumber)

//null datatype - Object
//undefined - undefined
//function - object function