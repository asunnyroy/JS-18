function sayMyname (){
    console.log("S")
    console.log("U")
    console.log("N")
}
// sayMyname()

                    // num1 and num2 Parameter
// function addTwoNumbers (num1, num2){
//    console.log(num1 + num2)
// }

function addTwoNumbers (num1, num2){
   
    let result = num1 + num2
    return num1 + num2
}


 const result = addTwoNumbers(5 ,4) // Arugument 

//  console.log( "Result :" ,result)

function loginUserMessage (username = "sunnny"){
    if (!username){ 
        console.log("Please enter a username")
        return
    }
    return `${username} Just logged in`
}

// console.log(loginUserMessage("suuny"))
//  console.log(loginUserMessage())

//                           Rest ...
function calculateCartPrice (val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 3000,400))

const user = {
    username : "sunny",
    price : 100
}

function handleObject (anyobject) {
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username: "sam",
    price : 300
})

const myNewArray = [ 2000,230,400,699]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))