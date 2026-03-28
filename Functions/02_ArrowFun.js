const user = {
    username : "sunny",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} ,welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this)


// function chai(){
//     let username = "suun"
//     console.log(this.username)
// }
// chai()


const chai = ()=>{
    let username = "sunny"
    console.log(this)
}
// chai()

// explicit retrun we use { } and then return
const addTwo =(num1 , num2)=>{
    return num1+ num2
}
console.log(addTwo(3,4))

// Implicit return  # we don't need to {}
 const add = (num1 , num2) =>
    num1+ num2
 console.log(add(3,5))