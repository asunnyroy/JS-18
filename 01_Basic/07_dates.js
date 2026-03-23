let myDate = new Date()
console.log(myDate.toString())

console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())

console.log(typeof myDate)

// let myCreateDate = new Date(2026,1, 12)
// let myCreateDate = new Date (2026, 0 , 24, 5,3)
let myCreateDate = new Date("01-03-2026")
// console.log(myCreateDate.toDateString());

let myTimeStamp = Date.now()

console.log(myTimeStamp)
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.getTime())

console.log(Math.floor(Date.now()/1000))

let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay())

// `${newDate.getDay()} and the time`
