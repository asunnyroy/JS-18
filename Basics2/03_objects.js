// singleton   (by using constructor )

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sunny" ,
    age: 22,
    location : "katihar",
    "email" : "suuny@googal.com",
    [mySym]:"mykey1",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]

}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym])
// console.log(typeof mySym)

JsUser.email = "suny@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "suuny"
// console .log(JsUser)

JsUser.greeting = function(){
    console.log("Heloo JS user")
}
console.log(JsUser.greeting);

JsUser.greeting2 = function(){
    console.log(`Hello JS user,${this.name}`)
}
JsUser.greeting()
console.log(JsUser.greeting2())
