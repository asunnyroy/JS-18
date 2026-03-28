// const tinderUser = new Object() singlaton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sunny"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname:{
        userfullname: {
            firstname: "sunny",
            lastname : "kumar"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)
const obj1 = {
    1 : "q",
    2: "b"
}
const obj2 = {3: "a", 4:"c"}
const obj4 = {4:"d", 5: "e"}
// const obj3 = {obj1, obj2}
// console.log(obj3)

const obj3 =Object.assign({},obj1,obj2)
const obj5 = {...obj1, ...obj2, ...obj4}

console.log(obj5)

const users = [
    {
        id : 1,
        email : "h@gamilcom"
    },
    {

    },
    {

    }
]
// console.log(users[1].email)
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isLoggedIn"))

console.log(users[1].email)

// Destructure 
const course = {
    coursename: "JS ",
    price : 999,
    courseInstructor : "hitesh"
}
// course.courseInstructor
const {courseInstructor : instructor} = course
console.log(instructor)


// Just lika a json
// {
//     "name": "hitesh",
//     "courseName" : "js in hinde",
//     "price" : "free"
// }
// API like array [{}, {}, {}]
