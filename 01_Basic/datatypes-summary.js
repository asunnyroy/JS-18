// primitive data Types  -> 7  (In memory provide copy)
//    String , Number , Boolean , Null, undefined, symbol , BigInt
 

const Score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail ;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(typeof id)
console.log(id === anotherId);

const bigNumber = 240585972794594n
console.log(typeof bigNumber);

// Reference (Non Primitive) 

// Array, Objects, Functions 
const heros = ["shaktiman", "naagraj", "doga"] // array
let myObj ={
    name:"sunny",
    age:22,
}

const myFunction = function(){
        console.log("Helo word")
}

console.log(typeof myObj)
console.log(typeof myFunction);
/* 
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(primitive) , Heap (Non- Primitive)

let myYoutubename = "sunnykumar.com"

let anothername = myYoutubename

anothername = "Chaiaurcode"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email : "user@.in",
    upi: 'sunu@ibl'
}
let userTwo = userOne

userTwo.email = 'sunny@gool.com'

console.log(userOne)
console.log(userTwo)